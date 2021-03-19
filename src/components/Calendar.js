import React from "react";

import EventCalendar from './EventCalendar'

import ".././App.css";
import '../css/Calendar.css';


function Calendar() {
  return (
    //The outer-container contains everything including the menu
    //The page wrap must contain everything on the page except the menu
    <div id="cal-outer-container">
      <div id="cal-text-container">
        <h1>Calendar</h1>
        <p>Here is where you can see all of our club meetings and events.</p>
      </div>
      <div id="calendar-holder">
        <EventCalendar />
      </div>

    </div>
  );
}

export default Calendar;
export { Calendar };
