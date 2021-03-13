import React from 'react';

import ".././App.css";
import '../css/About.css';

import { sideMenu as Menu } from "./sideMenu.js";

function About() {
  return (
    //The outer-container contains everything including the menu
    //The page wrap must contain everything on the page except the menu
    <div id="outer-container">
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <center>
          <h1>About Us</h1>
        </center>
        <div>
          <h3>HISTORY</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit
            rutrum velit in ornare. Pellentesque odio turpis, molestie nec risus
            sit amet, placerat fermentum ante. Nulla ullamcorper, ligula vel
            mattis finibus, mi lectus malesuada nisl, eget blandit nisl velit ut
            turpis. Vivamus tincidunt ante ut dui pretium volutpat. Nulla
            hendrerit velit non arcu semper, id suscipit sem condimentum. In ac
            neque vitae tellus ultricies tincidunt ut id sem. Proin laoreet,
            quam sit amet facilisis eleifend, ligula libero tincidunt ipsum, a
            pulvinar enim nunc eu nisl. Nullam feugiat lectus pellentesque,
            venenatis metus sed, interdum dolor. Morbi ultricies dui sit amet
            dui laoreet, eu euismod dui feugiat. Praesent laoreet, tortor ac
            commodo pulvinar, lacus enim auctor mauris, at dapibus erat erat
            quis lacus.
          </p>
        </div>
        <div>
          <h3>OUR GOALS</h3>
          <p>
            Nam elementum nibh vitae libero dignissim, a tempor erat vehicula.
            Nam euismod diam a augue iaculis consequat. Sed eu aliquam dolor.
            Pellentesque faucibus dignissim diam eget sollicitudin. Aenean
            tincidunt, tellus sed tempor varius, neque erat blandit lorem,
            semper placerat dui justo eu sapien. Nunc ac hendrerit velit.
            Phasellus vulputate lectus lectus, vitae interdum risus tristique
            et. Fusce commodo magna quis erat molestie suscipit. Ut lacinia
            tincidunt nunc eget fringilla. Nam leo ex, ullamcorper vitae feugiat
            in, egestas at erat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
export { About };
