import React from 'react';
import { Icon } from 'semantic-ui-react';

import ".././App.css";
import '../css/Footer.css';
import EventCalendar from './EventCalendar'

function Footer() {
  return (
    <div id="footer">
      <div id="footer-top"></div>
      <div id="footer-bottom">
          <p>Made with ♥ for CEN3031 and HTTB Club</p>
      </div>
    </div>
  );
}

export default Footer
export { Footer };
