import React from 'react';
import '../css/BookRecs.css';

import BookDataService from '../services/book.service';
import { sideMenu as Menu } from './sideMenu.js';

function BookRecs() {
  console.log(BookDataService.getAll());
  return (
    //The outer-container contains everything including the menu
    //The page wrap must contain everything on the page except the menu
    <div id="outer-container">
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
      <div id="page-wrap">
        <center>This is the BookRecs page. Stuff for the BookRecs page goes here.</center>
      </div>
    </div>
  );
}

export default BookRecs
export { BookRecs };
