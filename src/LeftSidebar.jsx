import React from "react";

function openLeftSideBar() {
    document.getElementById("leftSideBar").style.width = "250px";
}

function closeLeftSidebar() {
    document.getElementById("leftSideBar").style.width = "0";
}

const LeftSidebar = () => (
    <aside id='leftSideBar' className='w-40 min-h-screen bg-gray-400 p-4 fixed left-0 rounded-md items-center border-2'>
        <a href="javascript:void(0)" className="closebtn" onClick="closeLeftSideBar()">&times;</a>
        Free Tacos From Amazon
    </aside>
);

export default LeftSidebar;