import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import ".././App.css";
import '../css/AdminPanel.css';
import CalendarService from "../services/calendar.service";

import { sideMenu as Menu } from "./sideMenu.js";



function AdminPanel() {
  const [addEventTitle, setAddEventTitle] = useState("Title");
  const [addEventDate, setAddEventDate] = useState("YYYY-MM-DD");

  function handleAddEvent() {
  var password = prompt("Please enter the admin password", "Password");
  console.log(addEventTitle, addEventDate, password);
  
  }

  function handleDeleteEvent() {
    console.log("delete event");
  }

  return (
    //The outer-container contains everything including the menu
    //The page wrap must contain everything on the page except the menu
    <div id="outer-container">
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
      <center>
        <h1>Admin Panel</h1>
      </center>
      <h2>Add event to calendar</h2>
      <Form onSubmit={handleAddEvent}>
        <Form.Group widths='equal'>
          <Form.Input
                label="Event Title"
                placeholder='GBM #1'
                name='title'
                value={addEventTitle}
                onChange={(e, { name, value }) => setAddEventTitle(value)}
          />
          <Form.Input
                label="Event Date"
                placeholder="YYYY-MM-DD"
                name='date'
                value={addEventDate}
                onChange={(e, { name, value }) => setAddEventDate(value)}
          />
          <Form.Button content='Add Event' />
        </Form.Group>
      </Form>

      <h2>Delete event from calendar</h2>
      <Form onSubmit={handleDeleteEvent}>
        <Form.Group widths='equal'>
          <Form.Input label="Event Title" placeholder="GBM #1" />
          <Form.Button content='Delete Event' />
        </Form.Group>
      </Form>
      </div>
    </div>
  );
}

export default AdminPanel;
export { AdminPanel };
