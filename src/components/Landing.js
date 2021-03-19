import React from "react";
import "../css/Landing.css";
import { Button } from "semantic-ui-react";
import BookOfTheMonth from "./BookOfTheMonth.js";
import wave from '../assets/images/wave.svg';

import VoteBookService from "../services/voteBook.service"
function Landing() {
  return (
    <div id="landing-container">

      <div id="landing-nav">
      <a className="nav-button" href="github.com">About</a>
      <a className="nav-button" href="github.com">Calendar</a>
      <a className="nav-button" href="github.com">Officers</a>
      </div>
      <img src={wave} id="landing-wave"></img>
      <div id="landing-content">
        <div id="landing-welcome">
          <div id="welcome-text">
            <h5>WELCOME TO</h5>
            <h1>HOOKED TO <br></br>THE BOOK CLUB</h1>
            <div id="welcome-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure
              </p>
            </div>
          </div>
          <div id="welcome-buttons">
            <Button secondary size="large">Calendar</Button>
            <Button secondary size="large">Officers</Button>
          </div>
        </div>
        <div id="landing-botm">
          <BookOfTheMonth
            props={{
              ISBN: "9781847941831"
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
export { Landing };
