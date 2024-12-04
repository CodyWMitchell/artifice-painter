import React from 'react';
import { ReactP5Wrapper } from '@p5-wrapper/react';

const DrawingCanvas = ({ color, opacity, size }) => {
  function sketch(p5) {
    let currentColor = color || [0, 0, 0];
    let currentOpacity = opacity || 255;
    let currentSize = size || 10;
    let pan = { x: 0, y: 0 };
    let zoom = 1;
    let isDragging = false;
    let lastMouseX, lastMouseY;
    const CANVAS_WIDTH = 800;
    const CANVAS_HEIGHT = 600;
    let drawingBuffer;

    p5.updateWithProps = (props) => {
      if (props.color) currentColor = props.color;
      if (props.opacity !== undefined) currentOpacity = props.opacity;
      if (props.size !== undefined) currentSize = props.size;
    };

    p5.setup = () => {
      p5.createCanvas(window.innerWidth, window.innerHeight);
      drawingBuffer = p5.createGraphics(CANVAS_WIDTH, CANVAS_HEIGHT);
      drawingBuffer.background(255);

      pan.x = (window.innerWidth - CANVAS_WIDTH) / 2;
      pan.y = (window.innerHeight - CANVAS_HEIGHT) / 2;
    };

    const screenToWorld = (screenX, screenY) => {
      const worldX = (screenX - pan.x) / zoom;
      const worldY = (screenY - pan.y) / zoom;
      return { x: worldX, y: worldY };
    };

    p5.draw = () => {
      p5.background(255);

      p5.push();
      p5.translate(pan.x, pan.y);
      p5.scale(zoom);

      p5.image(drawingBuffer, 0, 0);

      p5.stroke(200);
      p5.strokeWeight(1 / zoom);
      p5.noFill();
      p5.rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      if (p5.mouseIsPressed && !isDragging) {
        const world = screenToWorld(p5.mouseX, p5.mouseY);

        if (
          world.x >= 0 &&
          world.x <= CANVAS_WIDTH &&
          world.y >= 0 &&
          world.y <= CANVAS_HEIGHT
        ) {
          // Draw to buffer with the original size, not affected by zoom
          drawingBuffer.fill(
            currentColor[0],
            currentColor[1],
            currentColor[2],
            currentOpacity
          );
          drawingBuffer.noStroke();
          drawingBuffer.ellipse(world.x, world.y, currentSize, currentSize);
        }
      }

      p5.pop();
    };

    p5.mousePressed = () => {
      if (p5.mouseButton === p5.CENTER) {
        isDragging = true;
        lastMouseX = p5.mouseX;
        lastMouseY = p5.mouseY;
      }
    };

    p5.mouseReleased = () => {
      if (p5.mouseButton === p5.CENTER) {
        isDragging = false;
      }
    };

    p5.mouseDragged = () => {
      if (isDragging) {
        const dx = p5.mouseX - lastMouseX;
        const dy = p5.mouseY - lastMouseY;
        pan.x += dx;
        pan.y += dy;
        lastMouseX = p5.mouseX;
        lastMouseY = p5.mouseY;
      }
    };

    p5.mouseWheel = (event) => {
      const mouseX = p5.mouseX;
      const mouseY = p5.mouseY;

      const worldBefore = screenToWorld(mouseX, mouseY);

      const zoomFactor = 1.1;
      if (event.delta > 0) {
        zoom /= zoomFactor;
      } else {
        zoom *= zoomFactor;
      }

      zoom = p5.constrain(zoom, 0.1, 5);

      const worldAfter = screenToWorld(mouseX, mouseY);

      pan.x += (worldAfter.x - worldBefore.x) * zoom;
      pan.y += (worldAfter.y - worldBefore.y) * zoom;
    };

    p5.windowResized = () => {
      p5.resizeCanvas(window.innerWidth, window.innerHeight);
    };
  }

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='bg-white shadow-lg w-full h-full'>
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
