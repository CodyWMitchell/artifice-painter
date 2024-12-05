import React from "react";
import VerticalSlider from "./VerticalSlider";

const LeftSidebar = ({setSize, setOpacity}) => {
    return (
        <div className="h-max">
            <aside id='leftSideBar' name="leftSideBar" className='w-40 h-max min-h-full bg-gray-400 p-4 fixed left-0 rounded-md items-center'>
                {/*<a href="javascript:void(0)" className="closebtn" onClick="closeLeftSideBar()">&times;</a>*/}
                <div className="flex grid h-max">
                    <VerticalSlider onChange={setSize} sliderName="BrushSize" sliderLabel="Brush Size" maxValue="100" step="1"/>
                    <VerticalSlider onChange={setOpacity} sliderName="BrushOpacity" sliderLabel="Brush Opacity" maxValue="100" step="1" />
                </div>
            </aside>
        </div>
    );
}

export default LeftSidebar;