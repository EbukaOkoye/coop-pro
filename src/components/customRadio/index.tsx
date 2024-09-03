import React, { ChangeEvent } from 'react';
import { ICustomRadio } from './interface';

function CustomRadio({
    name,
    label,
    customClass,
    radioClass,
    setIsChecked = () => { },
    customStyle,
    labelStyle,
    radioStyle,
    checked,
}: ICustomRadio) {
    const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked)
        return setIsChecked(e.target.checked);
    };


    return (
        <div>
            <label htmlFor="radio">{label}</label>
            <input id='radio' type="radio" name={name} checked={checked} onChange={handleCheck} />
        </div>
    )
}

export default CustomRadio