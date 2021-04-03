import React from 'react';
import { Icon } from 'semantic-ui-react';

import ".././App.css";
import '../css/Footer.css';
import EventCalendar from './EventCalendar'

function Footer() {
  return (
    //The outer-container contains everything including the menu
    //The page wrap must contain everything on the page except the menu
    <div id="footer">
      <div id="footer-top"></div>
      <div id="footer-bottom">
          <h5>Made with ♥ for CEN3031 and HTTB Club</h5>
      </div>
      
    </div>
  );
}

export default Footer
export { Footer };

