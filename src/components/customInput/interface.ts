import React, { ChangeEvent, ChangeEventHandler, ReactElement, ReactNode } from "react";
import { IconType } from "react-icons";

export interface ICustomInput {
    type: string;
    placeholder?: string;
    customStyle?: object;
    isShowLabel: boolean;
    labelText?: string;
    errors?: any;
    isShowIcon?: boolean;
    isShowEndIcon?: boolean;
    ImageIcon?: ReactNode;
    EndImageIcon?: ReactNode;
    value?: string;
    defaultValue?: any;
    onBlur?: any;
    onFocus?: any;
    disabled?: any;
    // onChange?: ChangeEventHandler<HTMLInputElement>;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    name?: string;
    customClass?: string;
    required?: boolean;
    labelClass?: string;
}
