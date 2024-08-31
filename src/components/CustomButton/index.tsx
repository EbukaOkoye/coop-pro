import React from 'react';
import { ICustomButton } from './interface';
import SpinnerLoader from '@/components/spinnerLoader';

function CustomButton({
    type,
    className,
    customStyle,
    text,
    onClick,
    isShowIcon,
    ImageIcon,
    disabled,
    isLoading,
}: ICustomButton) {
    return (
        <button
            className={`${className}`}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            <span>{isShowIcon && ImageIcon}</span>
            <span>{isLoading ? < SpinnerLoader /> : text}</span>
        </button>
    )
}

export default CustomButton