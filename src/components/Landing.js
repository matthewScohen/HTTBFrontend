import React from "react";
import { Card, Header, Image, Button } from "semantic-ui-react";

function Landing() {


  return (
    <div id="landing-container">
        <div id="landing-nav">
            <a className="nav-button" href="github.com">About</a>
            <a className="nav-button" href="github.com">Calendar</a>
            <a className="nav-button" href="github.com">Officers</a>
        </div>
        <div id="landing-content">
            <div id="landing-welcome">
                <div id="welcome-text">
                    <h5>WELCOME TO</h5>
                    <h1>HOOKED TO <br></br>THE BOOK CLUB</h1>
                    <div id="welcome-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        </p>
                        </div>
                </div>
                <div id="welcome-buttons">
                    <Button secondary size="large">Calendar</Button>
                    <Button secondary size="large">Officers</Button>
                </div>
                
            </div>
            <div id="landing-botm">
            <img src="https://jamesclear.com/wp-content/uploads/2018/09/AtomicHabits_1book.png"></img>
                <div id="botm-container">
                    <div id="botm-text">
                        <h2>BOOK OF THE MONTH</h2>
                        <h5>Atomic Habits - James Clear</h5>
                        <a href="github.com">link</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Landing;
export { Landing };
