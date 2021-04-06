import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import CalendarService from "../services/calendar.service";
import React, { useState, useEffect } from "react";

import "../css/Calendar.css";

function EventCalendar() {
  /*
  Code that accesses an API has to be done like this (with promise syntax) since you have to
  wait for the API to respond before using the results of the call.
  */
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const result = await CalendarService.getEvents();
      // console.log(result.data)
      setData(result.data);
    }
    fetchData();
  }, []); //The empty array keeps this function from being called continuously

  //Create events array from all events pulled from database
  let events = []
  for(var eventIndex in data) {
    if(eventIndex != undefined) {
      events.push(data[eventIndex])
    }
  }

  return (
    <FullCalendar
      id="calender"
      height="500px"
      defaultView="dayGridMonth"
      plugins={[dayGridPlugin]}
      events={events}
    />
  );
  }

  export default EventCalendar;
  export { EventCalendar };
