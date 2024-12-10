import ColorPicker from "./ColorPicker";
import PropTypes from "prop-types";

const RightSidebar = ({color, setColor}) => {
  return (
    <div className='h-max'>
      <aside
        id='rightSideBar'
        name='rightSideBar'
        className='h-max min-h-full bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border-l border-gray-100 border-opacity-50 fixed right-0 content-center'
      >
        <div className='flex flex-col h-full'>
            <ColorPicker color={color} setColor={setColor}/>
        </div>
      </aside>
    </div>
  );
};

RightSidebar.propTypes = {
    color: PropTypes.arrayOf(PropTypes.number),
    setColor: PropTypes.func
}

export default RightSidebar;
