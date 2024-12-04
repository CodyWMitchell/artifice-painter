import React from 'react';

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

const DrawingCanvas = () => (
  <div className='bg-white p-4 rounded-lg shadow-lg'>
    Drawing Canvas Goes Here
  </div>
);

const App = () => (
  <div className='flex min-h-screen'>
    <LeftSidebar />
    <main className='flex-1 mx-40 p-4'>
      <DrawingCanvas />
    </main>
    <RightSidebar />
  </div>
);

export default App;
