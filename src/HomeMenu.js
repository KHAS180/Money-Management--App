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
            <div class="textBox">
              <p class="step-1">
                <a href="Contatc">Contact</a>
                <div class="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </div>
                </p>
                <p class="step-2">
                <a href="About">About</a>
                <div class="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </div>
                </p>
              <p class="step-3">
                <a href="Offer">What we Offer</a>
                <div class="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </div>
                </p>
            </div>
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
