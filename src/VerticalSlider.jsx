import React from "react";

/// generic slider that takes the label and name as parameters
const VerticalSlider = ({sliderLabel, sliderName}) => {
    const variableAttribute1 = {name: sliderName}
    const variableAttribute2 = { htmlFor: sliderName };
    return (
        <div>
            <input className='rotate-90' type="range" min="0" max="100" { ...variableAttribute1 }/>
            <label { ...variableAttribute2 }>{sliderLabel}</label>
        </div>
    )
}


export default VerticalSlider;
