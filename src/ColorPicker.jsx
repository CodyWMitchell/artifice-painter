import PropTypes from 'prop-types';

const ColorPicker = ({color, setColor}) => {

    // https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
    const hexToRgb = (hex) => {
        const sliced = parseInt(hex.slice(1,7), 16);
        const r = (sliced >> 16) & 255;
        const g = (sliced >> 8) & 255;
        const b = sliced & 255;
        return [r, g, b];
    }

    const handleChange = (change) => {
        // value comes from the input in hex, so we need to convert to RGB
        const rgb = hexToRgb(change.target.value);
        setColor(rgb);
    };

    return (
        <>
            <div id='ColorPicker' className='flex-1'>
                <input className="min-h-16 drop-shadow-md bg-blend-screen bg-slate-300" type="color" onChange={handleChange} color={color}/>
            </div>
        </>
    );
}

ColorPicker.propTypes = {
    color: PropTypes.arrayOf(PropTypes.number),
    setColor: PropTypes.func
}

export default ColorPicker;