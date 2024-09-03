export interface ICustomRadio {
    name?: string;
    label?: string;
    checked?: boolean;
    customClass?: string;
    radioClass?: string;
    setIsChecked?: (value: boolean) => void;
    customStyle?: object;
    labelStyle?: object;
    radioStyle?: object;
    errors?: any;
}
