import { ChangeEventHandler, ReactElement, ReactNode } from "react";

export interface ICustomSelect {
    customStyle?: object;
    isShowLabel: boolean;
    labelText?: string;
    placeholder?: string;
    errors?: any;
    children?: React.ReactNode;
    value?: any;
    multiple?: boolean;
    customClass?: string;
    selectClass?: string;
    isShowIcon?: boolean;
    icon?: ReactNode;
    labelClass?: string;
    name?: string;
    onChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
}