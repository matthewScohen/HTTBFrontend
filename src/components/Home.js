import React from "react";
import { Card } from "semantic-ui-react";

import OfficerBio from "./OfficerBio.js";
import ".././App.css";
import "./Home.css";
import "./OfficerBio.css";

import { sideMenu as Menu } from "./sideMenu.js";

function Home() {
  const bio1 = {
    name: "sally smith",
    position: "president",
    description: "short bio"
  };
  const bio2 = {
    name: "john smith",
    position: "vice-president",
    description: "short bio"
  };

  return (
    //The outer-container contains everything including the menu
    //The page wrap must contain everything on the page except the menu
    <div id="outer-container">
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <center>
          <h1>Home</h1>
          <div id="officer-bios">
            <h2>Officer Bios</h2>
            <div id="officer-bios-cards">
              <Card.Group itemsPerRow={4}>
                <OfficerBio class="officer-bio" props={bio1} />
                <OfficerBio class="officer-bio" props={bio2} />
                <OfficerBio class="officer-bio" props={bio2} />
                <OfficerBio class="officer-bio" props={bio2} />
              </Card.Group>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Home;
export { Home };
