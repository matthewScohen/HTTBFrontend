import React from "react";


import { sideMenu as Menu } from "./sideMenu.js";
import Landing from "./Landing.js"; 
import Calendar from "./Calendar.js"; 
import Officers from "./Officers.js"; 
import Footer from "./Footer.js"; 

import ".././App.css";
import "../css/Home.css";


function Home() {
  

  return (
    //The outer-container contains everything including the menu
    //The page wrap must contain everything on the page except the menu
    <div id="outer-container">
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <div>
          <center>
            {/*This is the home page. Stuff for the homepage goes here.*/}
          </center>
        </div>
        <Landing />
        <Calendar />
        <Officers />
        <Footer />
        
      </div>
    </div>
  );
}

export default Home;
export { Home };
