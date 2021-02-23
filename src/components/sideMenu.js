import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import './sideMenu.css';

class sideMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="calendar" className="menu-item" href="/calendar">Calendar</a>
      </Menu>
    );
  }
}

export default sideMenu;
export { sideMenu };
