import React, { ChangeEventHandler, ReactElement, ReactNode } from "react";
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
    value?: any;
    defaultValue?: any;
    onBlur?: any;
    onFocus?: any;
    disabled?: any;
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
    name?: string;
    customClass?: string;
    required?: boolean;
}
