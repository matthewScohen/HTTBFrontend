import React from 'react';

import ".././App.css";
import '../css/Calendar.css';

import { sideMenu as Menu } from './sideMenu.js';

function Calendar() {
  return (
    //The outer-container contains everything including the menu
    //The page wrap must contain everything on the page except the menu
    <div id="outer-container">
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
      <div id="page-wrap">
        <center>This is the calendar page. Stuff for the calendar goes here.</center>
      </div>
    </div>
  );
}

export default Calendar
export { Calendar };
