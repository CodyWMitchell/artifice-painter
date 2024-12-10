import React from 'react';
import DrawingCanvas from './DrawingCanvas';
import LeftSidebar from './LeftSidebar.jsx';
import RightSidebar from './RightSidebar.jsx';


const App = () => {
  const [color, setColor] = React.useState([255, 0, 0]);
  const [opacity, setOpacity] = React.useState(10);
  const [size, setSize] = React.useState(50);
  const [isDrawing, setIsDrawing] = React.useState(false);

  return (
    <div className='flex min-h-screen'>
      <LeftSidebar setSize={setSize} setOpacity={setOpacity}/>
      <main className='flex-1'>
        <DrawingCanvas
          color={color}
          opacity={opacity}
          size={size}
          setIsDrawing={setIsDrawing}
        />
      </main>
      <RightSidebar color={color} setColor={setColor}/>
    </div>
  );
};

export default App;
