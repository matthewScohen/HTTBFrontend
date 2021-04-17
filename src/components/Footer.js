import React from 'react';
import { Link } from 'react-router-dom'
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
        <div id="footer-icons">
          <a class="footer-icon" href="https://discord.gg/QAc8c3S" target="_blank">
            <Icon name="discord" size="large"/>
          </a>
          <a class="footer-icon" href="https://groupme.com/join_group/61080275/ExWii84e" target="_blank">
            <Icon link name="group" size="large"/>
          </a>
        </div>
        <div>
          <p>Made with ♥ for CEN3031 and HTTB Club</p>
        </div>
      </div>

    </div>
  );
}

export default Footer
export { Footer };
