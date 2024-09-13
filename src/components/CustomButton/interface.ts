import React, { ReactElement, ReactNode } from "react";

export interface ICustomButton {
    type?: "button" | "submit" | "reset";
    className?: string;
    customStyle?: object;
    text: string | number | any;
    onClick?: any;
    isShowIcon?: boolean;
    ImageIcon?: ReactNode;
    disabled?: boolean;
    isLoading?: boolean;
}
