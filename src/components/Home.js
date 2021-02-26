import React from 'react';
import './Home.css';

import { sideMenu as Menu } from './sideMenu.js';

function Home() {
  return (
    //The outer-container contains everything including the menu
    //The page wrap must contain everything on the page except the menu
    <div id="outer-container">
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
      <div id="page-wrap">
        <center>This is the home page. Stuff for the homepage goes here.</center>
      </div>
    </div>
  );
}

export default Home
export { Home };
