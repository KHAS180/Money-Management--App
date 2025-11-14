import React from 'react';
import './App.css';

function App() {
  return (
    <div>
        <div class="container">
          <div class="header">
            <div class="topnav">
              <nav>
                <ul>
                    <a href = "#Home">Home</a>
                    <a href = "#Contact">Contact</a>
                    <a href = "#About">About</a>
                    <a href = "#What we offer">What we Offer</a>
                    <a href = "#Join">Sign Up</a>
                    <a href = "#Login">Login</a>
                </ul>
              </nav>
            </div>
            <div class="title-bar">
                <h1 className='title'>Money Management</h1>
            </div>
        </div>

          <div class="step-contanier">
              <div class="step-1">First Step</div>
              <div class="step-2">Second Step</div>
              <div class="step-3">Third Step</div>
          </div>
          
          <div class="color-palette">
              <div class="color-dot dark-blue"></div>
              <div class="color-dot light-blue"></div>
              <div class="color-dot gold"></div>
              <div class="color-dot white"></div>
          </div>
      </div>
    </div>
  );
}

export default App;
