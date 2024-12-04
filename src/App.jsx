import React from 'react';
import DrawingCanvas from './DrawingCanvas';

const LeftSidebar = () => (
  <aside className='w-40 min-h-screen bg-gray-200 p-4 fixed left-0'>
    Left Sidebar
  </aside>
);

const RightSidebar = () => (
  <aside className='w-40 min-h-screen bg-gray-200 p-4 fixed right-0'>
    Right Sidebar
  </aside>
);

const App = () => {
  const [color, setColor] = React.useState([255, 0, 0]);
  const [opacity, setOpacity] = React.useState(10);
  const [size, setSize] = React.useState(50);
  const [isDrawing, setIsDrawing] = React.useState(false);

  return (
    <div className='flex min-h-screen'>
      <LeftSidebar />
      <main className='flex-1 mx-40'>
        <DrawingCanvas
          color={color}
          opacity={opacity}
          size={size}
          setIsDrawing={setIsDrawing}
        />
      </main>
      <RightSidebar />
    </div>
  );
};

export default App;
