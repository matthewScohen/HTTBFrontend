import React, { useState, useEffect } from "react";
import "../css/Landing.css";
import { Button, Icon } from "semantic-ui-react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import BookOfTheMonth from "./BookOfTheMonth.js";
import wave from '../assets/images/wave.svg';
import bookDisplay from '../assets/images/11070.png';
import VoteBookService from "../services/voteBook.service"


function Landing() {

  const [spoilerISBN, setSpoilerISBN] = useState("9781847941831");

  useEffect(() => {
    async function fetchData() {
      const result = await VoteBookService.getVoteBooks();
      const data = result.data;
      for(var index in data) {
        if(data[index].isSpoilerBook) {
          setSpoilerISBN(data[index].isbn);
        }
      }
    }
    fetchData();
  }, []);

  return (
    <div id="landing-container">
      <div id="landing-nav">
        <a className="nav-button" href="#cal-outer-container"><h6>CALENDAR</h6></a>
        <a className="nav-button" href="#officer-page"><h6>OFFICERS</h6></a>
        <BookOfTheMonth
              props={{
                ISBN: spoilerISBN
              }}
            />
      </div>
      {/*<img src={wave} id="landing-wave"></img>*/
      /* "M0,288L1440,32L1440,320L0,320Z" */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" id="landing-wave">
        <defs>
          <linearGradient id="MyGradient" gradientTransform="rotate(90)">
            <stop offset="30%"  stopColor="#153154" />
            <stop offset="100%" stopColor="#22436c" />
          </linearGradient>
        </defs>
        <path fill="url(#MyGradient)" fillOpacity="1" d="M0,256L80,245.3C160,235,320,213,480,224C640,235,800,277,960,277.3C1120,277,1280,235,1360,213.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
        </path>
      </svg>
      <div id="landing-content">
        <div id="landing-welcome">
          <div id="welcome-text">
            <h5>WELCOME TO</h5>
            <h1>HOOKED TO <br></br>THE BOOK CLUB</h1>
            <div id="welcome-description">
              <p>

              </p>
            </div>
          </div>
          <div id="welcome-buttons">
           <AwesomeButton type="primary" className="button" href="https://discord.gg/QAc8c3S"><Icon name='discord' size="large"/> Discord</AwesomeButton>
           <AwesomeButton type="primary" className="button" href="https://groupme.com/join_group/61080275/ExWii84e"><Icon name='group' size="large"/>GroupMe</AwesomeButton>
          </div>
        </div>
        <div id="landing-botm">
          <img src={bookDisplay} id="book-display"></img>
        </div>
      </div>
    </div>
  );
}

export default Landing;
export { Landing };
