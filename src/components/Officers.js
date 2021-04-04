import React from 'react';

import ".././App.css";
import '../css/Officers.css';
import EventCalendar from './EventCalendar'

import { Card } from "semantic-ui-react";
import "../css/OfficerBio.css";
import OfficerBio from "./OfficerBio.js";

import bijuriImage from '../assets/images/bijuri.jpeg';
import lucyImage from '../assets/images/lucy.jpeg';
import toshitaImage from '../assets/images/toshita.jpeg';

function Officers() {
    const bio1 = {
        name: "Lucy Frank",
        position: "President",
        description: "I’m Lucy, a senior Environmental Science major and librarian-in-training. When I’m not reading, I can be found climbing trees, knitting, or searching for my last three Korok seeds. Give me recommendations for great fantasy novels!",
        imageSrc: lucyImage
      };
      const bio2 = {
        name: "Bijuri Patel",
        position: "Vice Presdent (Veep)",
        description: "I'm Bijuri, a senior Information Systems major aiming to be a technical writer. I love indulging in stories, and my favorites include Percy Jackson and the Olympians; Six of Crows and Crooked Kingdom; and Red, White & Royal Blue. Please let me know what your favorite books are!",
        imageSrc: bijuriImage
      };

      const bio3 = {
        name: "Toshita Barve",
        position: "Treasurer",
        description: "I'm Toshita, a junior Biology major, minoring in Sociology. I love to read but please don't recommend any books to me because my TBR already has 1800 books on it!",
        imageSrc: toshitaImage
      };

  return (
    <div id="officer-page">
        <svg xmlns="http://www.w3.org/2000/svg" id="officer-wave" viewBox="0 0 1440 130">
        <defs>
                    <linearGradient id="MyGradient2" gradientTransform="rotate(90)">
                      <stop offset="30%"  stopColor="#22436c" />
                      <stop offset="100%" stopColor="#153154" />
                    </linearGradient>
                  </defs>
        <path fill="url(#MyGradient2)" fill-opacity="1" d="M0,128L80,106.7C160,85,320,43,480,37.3C640,32,800,64,960,74.7C1120,85,1280,75,1360,69.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
          <center>
          <div id="officers-text-container">
            <h1>Meet the Authors</h1>
            <p>Here is a short description of the club officers. Feel free to reach out for more information!</p>
          </div>
            <div id="officer-bios-cards">
                <div class="cardRow">
                <div><OfficerBio class="officer-bio" props={bio1} /></div>
                </div>
                <div class="cardRow">
                <div><OfficerBio class="officer-bio" props={bio2} /></div>
                </div>
                <div class="cardRow">
                <div><OfficerBio class="officer-bio" props={bio3} /></div>
                </div>
            </div>
          </center>
        </div>
  );
}

export default Officers
export { Officers };
