import React, { ChangeEventHandler, ReactElement, ReactNode } from "react";
import { IconType } from "react-icons";

export type FileUploadDetails = {
    fileName: string;
    fileExtension: string;
    base64String: string;
};

export interface ICustomUpload {
    placeholder?: string;
    customStyle?: object;
    isShowLabel: boolean;
    labelText?: string;
    isInnerText?: boolean;
    innerText?: string;
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
    divClass?: string;
    id: string;
    htmlFor: string;
    onFileUpload?: (fileDetails: FileUploadDetails) => void;
}
