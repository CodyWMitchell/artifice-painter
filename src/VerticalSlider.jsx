import PropTypes from 'prop-types';

const VerticalSlider = ({sliderName, onChange, maxValue, step}) => {
    const handleChange = (change) => {
        // this calls either setSize or setOpacity depending on which one was passed
        onChange(change.target.value)
        console.log(change.target.value)
    }
    return (
        <div className='flex flex-col col-auto text-center items-center py-2 scale-150 my-8 mx-4'>
            <input className='slider grow w-full align-middle cursor-pointer accent-white range-sm '
                   type="range"
                   orient="vertical"
                   min="0"
                   max={maxValue}
                   onChange={handleChange}
                   name={sliderName}
                   step={step}
            />
        </div>
    )
}

VerticalSlider.propTypes = {
    sliderName: PropTypes.string.isRequired,
    maxValue: PropTypes.number,
    min: PropTypes.number,
    step: PropTypes.number,
    onChange: PropTypes.func
}
export default VerticalSlider;
