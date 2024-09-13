import React from 'react';
import { ImSpinner8 } from "react-icons/im";

function SpinnerLoader() {
    return (
        <div>
            <ImSpinner8 className='animate-spin text-center mx-auto' />
        </div>
    )
}

export default SpinnerLoader;