import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import ApiAuth from '@/api/ApiAuth';
import { AuthState, ISignIn, IMember, ISignUp } from './interface';
import { showErrorToast } from '@/utils/toast';

export const loginMember = createAsyncThunk<IMember, ISignIn>(
    "member/login",
    async (credentials) => {
        const request = await ApiAuth.post("Account/MemberLogin", credentials);
        const response = await request.data;
        localStorage.setItem("user", JSON.stringify(response));
        return response;
    }
);

export const signupMember = createAsyncThunk<IMember, ISignUp>(
    'member/signup',
    async (credentials) => {
        const request = await ApiAuth.post('Onboarding/SignUpMember', credentials);
        const response = await request.data;
        localStorage.setItem("user", JSON.stringify(response));
        return response;
    }
)

const initialState: AuthState = {
    isLoading: false,
    user: null,
    error: null,
    success: false,
    isAuthenticated: false,
};

const authMember = createSlice({
    name: 'member',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        clearUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginMember.pending, (state) => {
                state.isLoading = true;
                state.user = null;
                state.error = null;
                state.success = false;
            })
            .addCase(loginMember.fulfilled, (state, action: PayloadAction<IMember>) => {
                state.isLoading = false;
                state.user = action.payload;
                state.error = null;
                state.success = action.payload.status;
            })
            .addCase(signupMember.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                if (action.error.message === "Request failed with status code 401") {
                    state.error = "Access Denied!!! Invalid Credentials";
                    showErrorToast('"Access Denied!!! Invalid login credentials"')
                } else {
                    state.error = action.error.message!;
                }
            })
            .addCase(signupMember.pending, (state) => {
                state.isLoading = true;
                state.user = null;
                state.error = null;
                state.success = false;
            })
            .addCase(signupMember.fulfilled, (state, action: PayloadAction<IMember>) => {
                state.isLoading = false;
                state.user = action.payload;
                state.error = null;
                state.success = action.payload.status;
            })
            .addCase(loginMember.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                if (action.error.message === "Request failed with status code 401") {
                    state.error = "Access Denied!!! Invalid Credentials";
                } else {
                    state.error = action.error.message!;
                }
            })
    }
})

export const { setUser, clearUser } = authMember.actions;

export default authMember.reducer;
