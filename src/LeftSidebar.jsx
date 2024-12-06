import VerticalSlider from "./VerticalSlider";
import PropTypes from "prop-types";

const LeftSidebar = ({ setSize, setOpacity }) => {
  return (
    <div className='h-max'>
      <aside
        id='leftSideBar'
        name='leftSideBar'
        className='h-max min-h-full bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border-r border-gray-100 border-opacity-50 fixed left-0 content-center'
      >
        <div className='flex flex-col h-full'>
          <VerticalSlider
            onChange={setSize}
            sliderName='BrushSize'
            maxValue='500'
            step='1'
          />
          <VerticalSlider
            onChange={setOpacity}
            sliderName='BrushOpacity'
            maxValue='100'
            step='1'
          />
        </div>
      </aside>
    </div>
  );
};


LeftSidebar.propTypes = {
    setSize: PropTypes.func.isRequired,
    setOpacity: PropTypes.func.isRequired
}
export default LeftSidebar;
