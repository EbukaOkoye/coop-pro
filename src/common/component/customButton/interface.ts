import React, { ReactElement, ReactNode } from "react";

export interface ICustomButton {
    type?: "button" | "submit" | "reset";
    className?: any;
    customStyle?: any;
    text: string | number | any;
    onClick?: () => void;
    isShowIcon?: boolean;
    ImageIcon?: ReactNode;
    disabled?: boolean;
    isLoading?: boolean;
}
