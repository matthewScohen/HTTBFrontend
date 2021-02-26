import React from 'react';
import './About.css';

import { sideMenu as Menu } from './sideMenu.js';

function About() {
  return (
    //The outer-container contains everything including the menu
    //The page wrap must contain everything on the page except the menu
    <div id="outer-container">
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
      <div id="page-wrap">
        <center>This is the about page. Stuff for the about page goes here.</center>
      </div>
    </div>
  );
}

export default About
export { About };
