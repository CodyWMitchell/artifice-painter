import React from 'react';
import { ReactP5Wrapper } from '@p5-wrapper/react';

const DrawingCanvas = ({ color, opacity, size }) => {
  function sketch(p5) {
    p5.setup = () => p5.createCanvas(800, 600, p5.WEBGL);

    p5.draw = () => {
      background(255);
    };

    p5.mouseDragged = () => {
      p5.fill(color[0], color[1], color[2], opacity);
      p5.noStroke();
      p5.ellipse(
        p5.mouseX - p5.width / 2,
        p5.mouseY - p5.height / 2,
        size,
        size
      );
    }
  }

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='bg-white shadow-lg'>
        <ReactP5Wrapper
          sketch={sketch}
          color={color}
          opacity={opacity}
          size={size}
        />
      </div>
    </div>
  );
};

export default DrawingCanvas;
