import React from "react";
import PropTypes from 'prop-types';
import { useState } from "react";

const VerticalSlider = ({sliderLabel, sliderName, onChange, maxValue, step}) => {
    const handleChange = (change) => {
        // this calls either setSize or setOpacity depending on which one was passed
        onChange(change.target.value)
    }
    return (
        // remove border later - for troubleshooting formatting
        <div className='w-full h-max col-auto text-center border border-solid border-black'>
            <input className='scale-150 grow -rotate-90 w-full h-80 align-middle cursor-pointer accent-gray-600 range-sm '
                   type="range"
                   min="0"
                   max={maxValue}
                   onChange={handleChange}
                   name={sliderName}
                   step={step}
            />
            <label className='font-medium' htmlFor={sliderName}>{sliderLabel}</label>
        </div>
    )
}

VerticalSlider.propTypes = {
    sliderLabel: PropTypes.string.isRequired,
    sliderName: PropTypes.string.isRequired
}
export default VerticalSlider;
