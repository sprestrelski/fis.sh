import React from 'react';
import {
  Button,
  Window,
  WindowContent,
  WindowHeader
} from 'react95';
const chromis = 'bluegreenchromis.png';

export default function FishWindow() {
  return (
    <>
      <Window className='window' id="fish-window">
        <WindowHeader className='window-title'>
          <span>warning</span>
        </WindowHeader>
        <WindowContent>
          <div style={{ textAlign: 'center'}}>
            <img
              id="chromis"
              src={chromis}
              alt='chromis'
            />
          </div>
          <div style={{ justifyContent: 'space-between' }}>
            <a href="https://e4e.ucsd.edu/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Button style={{ marginRight: '8px' }}>ok</Button>
            </a>
            <a href="https://e4e.ucsd.edu/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Button style={{ marginRight: '8px' }}>ok</Button>
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Button>dont</Button>
            </a>
          </div>
        </WindowContent>
      </Window>

    </>
  );
}
