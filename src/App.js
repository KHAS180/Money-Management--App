import React from 'react';
import './App.css';

function App() {
  return (
    <div>
        <div class="container">
          <div class="header">
          <div class="title-bar">
            <h1 className='title'>Money Mangement</h1>
          </div>
        </div>

      <div class="content">
          <div class="bracket-area">
              <div class="match-round-1"></div>
              <div class="match-round-2"></div>
              <div class="final-match"></div>
          </div>
          <div class="color-palette">
              <div class="color-dot dark-blue"></div>
              <div class="color-dot light-blue"></div>
              <div class="color-dot gold"></div>
              <div class="color-dot white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
