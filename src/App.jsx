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
  const [color, setColor] = React.useState([0, 0, 0, 1]);
  const [size, setSize] = React.useState(5);
  const [isDrawing, setIsDrawing] = React.useState(false);

  return (
    <div className='flex min-h-screen'>
      <LeftSidebar />
      <main className='flex-1 mx-40 p-4'>
        <DrawingCanvas
          color={color}
          size={size}
          setIsDrawing={setIsDrawing}
        />
      </main>
      <RightSidebar />
    </div>
  );
};

export default App;
