import PinInput from "react-pin-input";
import { ICustomPinInput } from "./interface";

import './customPinInput.css';


const CustomPinInput = ({ onChange, onComplete }: ICustomPinInput) => {
    return (
        <PinInput
            length={6}
            initialValue=""
            secret
            secretDelay={100}
            onChange={onChange}
            type="custom"
            inputMode="number"
            onComplete={onComplete}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
        />
    );
};

export default CustomPinInput;