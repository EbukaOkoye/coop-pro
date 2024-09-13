export interface ISignIn {
    email: string;
    password: string;
}

export interface MemberSignUpProps {
    propertyForm: ISignUp | null
    updatePropertyForm: (property: Partial<ISignUp>) => void
}



export interface ISignUp {
    serviceNumber: string;
    salutation: string;
    firstName: string;
    middleName: string;
    surname: string;
    gender: string;
    ledger: string;
    phoneNumber: string;
    email: string;
    dob: string;
    residentialAddress: string;
    stateOfOrigin: string;
    lga: string;
    nationality: string;
    maritalStatus: string;
    memberType: string;
    memberRank: string;
    memberUnit: string;
    gurantorFullName: string;
    gurantorServiceNumber: string;
    gurantorAddress: string;
    gurantorRelationship: string;
    gurantorGender: string;
    gurantorEmail: string;
    gurantorRank: string;
    gurantorUnit: string;
    gurantorPassportBase64: string;
    gurantorPassportFileName: string;
    gurantorPassportFileExtension: string;
    gurantorSignatureBase6: string;
    gurantorSignatureFileNam: string;
    gurantorSignatureFileExtensio: string;
    gurantorPhoneN: string;
    nextOfKinFullName: string;
    nextOfKinAddres: string;
    nextOfKinRelationship: string;
    nextOfKinGender: string;
    nextOfKinPhoneNumber: string;
    nextOfKinEmail: string;
    hasUploadedPicture: boolean,
    nextOfKinStateOfOrigin: string;
    nextOfKinNationality: string;
    approvalLevel: string;
    approvalStatus: number;
    savingsTypeId: number;
    isProfileUpdated: boolean;
    isKinsmenUpdated: boolean;
    photographBase64: string;
    photographFileName: string;
    photographFileExtension: string;
    signatureBase64: string;
    signatureFileName: string;
    signatureFileExtension: string;
    ninIdentificationNumber: string;
    memberIdFileName: string;
    memberIdFileExtension: string;
    memberIdBase64: string;
    employmentStatus: string;
    savingsSetUp: {
        bankName: string;
        salaryBankAccountNumber: string;
        monthlyDeductionValue: 0;
        salaryBankAccountName: string;
        deductionCommencementDate: string;
        deductionExpiryDate: string;
    },
}



export interface AuthState {
    isLoading: boolean;
    user: IMember | null;
    error: string | null;
    success: boolean;
    isAuthenticated: boolean;
}

export interface IMember {
    id: number;
    name: string;
    email: string;
    status: boolean;
    token: string;
}

