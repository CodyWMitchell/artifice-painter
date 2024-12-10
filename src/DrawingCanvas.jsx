import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const DrawingCanvas = ({
  color = [0, 0, 0],
  opacity = 255,
  size = 10,
}) => {
  const canvasRef = useRef(null);
  const sketchRef = useRef({
    currentColor: color,
    currentOpacity: opacity,
    currentSize: size,
  });

  useEffect(() => {
    sketchRef.current = {
      currentColor: color,
      currentOpacity: opacity,
      currentSize: size,
    };
  }, [color, opacity, size]);

  useEffect(() => {
    const sketch = (p) => {
      let pan = { x: 0, y: 0 };
      let zoom = 1;
      let isDragging = false;
      let lastMouseX, lastMouseY;
      const CANVAS_WIDTH = 800;
      const CANVAS_HEIGHT = 600;
      let drawingBuffer;

      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        drawingBuffer = p.createGraphics(CANVAS_WIDTH, CANVAS_HEIGHT);
        drawingBuffer.background(255);

        pan.x = (window.innerWidth - CANVAS_WIDTH) / 2;
        pan.y = (window.innerHeight - CANVAS_HEIGHT) / 2;
      };

      const screenToWorld = (screenX, screenY) => {
        const worldX = (screenX - pan.x) / zoom;
        const worldY = (screenY - pan.y) / zoom;
        return { x: worldX, y: worldY };
      };

      p.draw = () => {
        p.background(50);

        p.push();
        p.translate(pan.x, pan.y);
        p.scale(zoom);

        p.image(drawingBuffer, 0, 0);

        p.stroke(200);
        p.strokeWeight(1 / zoom);
        p.noFill();
        p.rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        if (p.mouseIsPressed && !isDragging) {
          const world = screenToWorld(p.mouseX, p.mouseY);

          if (
            world.x >= 0 &&
            world.x <= CANVAS_WIDTH &&
            world.y >= 0 &&
            world.y <= CANVAS_HEIGHT
          ) {
            const {
              currentColor,
              currentOpacity,
              currentSize,
            } = sketchRef.current;

            const centerX = world.x;
            const centerY = world.y;
            drawingBuffer.fill(
              currentColor[0],
              currentColor[1],
              currentColor[2],
            );
            drawingBuffer.noStroke();
            drawingBuffer.ellipse(centerX, centerY, currentSize, currentSize);
          }
        }

        p.pop();
      };

      p.mousePressed = () => {
        if (p.mouseButton === p.CENTER) {
          isDragging = true;
          lastMouseX = p.mouseX;
          lastMouseY = p.mouseY;
        }
      };

      p.mouseReleased = () => {
        if (p.mouseButton === p.CENTER) {
          isDragging = false;
        }
      };

      p.mouseDragged = () => {
        if (isDragging) {
          const dx = p.mouseX - lastMouseX;
          const dy = p.mouseY - lastMouseY;
          pan.x += dx;
          pan.y += dy;
          lastMouseX = p.mouseX;
          lastMouseY = p.mouseY;
        }
      };

      p.mouseWheel = (event) => {
        const mouseX = p.mouseX;
        const mouseY = p.mouseY;

        const worldBefore = screenToWorld(mouseX, mouseY);

        const zoomFactor = 1.1;
        if (event.delta > 0) {
          zoom /= zoomFactor;
        } else {
          zoom *= zoomFactor;
        }

        zoom = p.constrain(zoom, 0.1, 5);

        const worldAfter = screenToWorld(mouseX, mouseY);

        pan.x += (worldAfter.x - worldBefore.x) * zoom;
        pan.y += (worldAfter.y - worldBefore.y) * zoom;
      };

      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
      };
    };

    const myP5 = new p5(sketch, canvasRef.current);

    return () => myP5.remove();
  }, []);

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='bg-white shadow-lg w-full h-full' ref={canvasRef} />
    </div>
  );
};

export default DrawingCanvas;
