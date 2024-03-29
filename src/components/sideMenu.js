import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import '../css/sideMenu.css';

class sideMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="voting" className="menu-item" href="/Voting">Voting</a>
        <a id="bookRecs" className="menu-item" href="/BookRecs">Book Recommendations</a>
      </Menu>
    );
  }
}

export default sideMenu;
export { sideMenu };
