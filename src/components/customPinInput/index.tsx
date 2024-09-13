import PinInput from "react-pin-input";
import { ICustomPinInput } from "./interface";

import './customPinInput.css';


const CustomPinInput = ({ onChange, onComplete, customStyle, length = 6 }: ICustomPinInput) => {
    return (
        <PinInput
            length={length}
            initialValue=""
            secret
            secretDelay={100}
            onChange={onChange}
            type="custom"
            inputMode="number"
            onComplete={onComplete}
            autoSelect={true}
            style={customStyle}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}

        />
    );
};

export default CustomPinInput;