import React from 'react';

import ".././App.css";
import '../css/Officers.css';
import EventCalendar from './EventCalendar'

import { Card } from "semantic-ui-react";
import "../css/OfficerBio.css";
import OfficerBio from "./OfficerBio.js";

import caroImage from '../assets/images/caro.jpeg';
import zachImage from '../assets/images/zach.jpeg';
import toshitaImage from '../assets/images/toshita.jpeg';
import matthewImage from '../assets/images/matthew.jpeg';

function Officers() {
    const bio2 = {
        name: "Zachary Granat",
        position: "Treasurer ",
        description: "I'm Zachary, a sophomore (the baby of the bunch) majoring in English. Here are some of the books whose mention summons my presence: Don Quixote, Moby-Dick, Bleak House, Gormenghast, and The Brothers Karamazov.",
        imageSrc: zachImage
      };
      const bio3 = {
        name: "Caro Bello",
        position: "Vice President",
        description: "I’m Caro, a junior Wildlife Conservation major and English minor. I love reading, hiking and playing with my pet snake Tangerine!",
        imageSrc: caroImage
      };

      const bio1 = {
        name: "Toshita Barve",
        position: "President",
        description: "I'm Toshita, a senior Biology major, minoring in Sociology. If you recommend a book to me chances are, it’ll already be on my TBR… Don’t let that stop you though! I want all the recommendations!",
        imageSrc: toshitaImage
      };

      const bio4 = {
        name: "Matthew Cohen",
        position: "Website Manager",
        description: "I'm Matthew, a junior Computer Engineering major. I love to read any and all things fantasy and sci-fi; when I'm not reading you can probably find me playing ultimate frisbee (or doing homework).",
        imageSrc: matthewImage
      }

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
                <div class="cardRow">
                <div><OfficerBio class="officer-bio" props={bio4} /></div>
                </div>
            </div>
          </center>
        </div>
  );
}

export default Officers
export { Officers };
