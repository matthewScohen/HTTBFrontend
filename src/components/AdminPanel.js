import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import ".././App.css";
import '../css/AdminPanel.css';
import CalendarService from "../services/calendar.service";
import VoteBookService from "../services/voteBook.service";
import BookDataService from "../services/book.service";

import { sideMenu as Menu } from "./sideMenu.js";



function AdminPanel() {
  const [addEventTitle, setAddEventTitle] = useState("");
  const [deleteEventTitle, setDeleteEventTitle] = useState("");
  const [addEventDate, setAddEventDate] = useState("");

  const [voteBookTitle, setVoteBookTitle] = useState("");
  const [voteBookIsbn, setVoteBookIsbn] = useState("");

  const [bookRecIsbn, setBookRecIsbn] = useState("");

  async function handleAddEvent() {
    var password = prompt("Please enter the admin password", "Password");
    const response = await (CalendarService.addEvent(addEventTitle, addEventDate, password));
    console.log(response);
    if(response.data.title !== undefined) {
      alert("Event " + response.data.title + " successfully added to the calendar!");
    }
    else if(response.data.message !== undefined) {
      alert(response.data.message);
    }
    else {
      alert("An error occured while adding this event");
    }
    //Clear form fields after submission
    setAddEventTitle("");
    setAddEventDate("");
  }

  async function handleDeleteEvent() {
    var password = prompt("Please enter the admin password", "Password");
    const response = await (CalendarService.deleteEvent(deleteEventTitle, password));
    alert(response.data.message);
    //Clear form fields after submission
    setDeleteEventTitle("");
  }

  async function handleAddVoteBook() {
    var password = prompt("Please enter the admin password", "Password");
    const response = await (VoteBookService.createVoteBook(voteBookTitle, voteBookIsbn, false, password));
    if(response.data.isbn == voteBookIsbn)
      alert("Book added to poll successfully!");
    else
      alert("There was an error adding the book to the poll.");
  }

  async function handleRemoveVoteBook() {
    var password = prompt("Please enter the admin password", "Password");
    const response = await (VoteBookService.deleteVoteBook(voteBookIsbn, password));
    alert(response.data.message);
  }

  async function handleDeleteBookRec() {
    var password = prompt("Please enter the admin password", "Password");
    const response = await (BookDataService.delete(bookRecIsbn, password));
    alert(response.data.message);
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
            <Form.Input
                  label="Event Title"
                  placeholder='GBM #1'
                  name='title'
                  value={deleteEventTitle}
                  onChange={(e, { name, value }) => setDeleteEventTitle(value)}
            />
            <Form.Button content='Delete Event' />
          </Form.Group>
        </Form>

        <h2> Add/Remove Book To/From Voting Poll </h2>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input
                  label="Title"
                  placeholder='The Name of the Wind'
                  name='title'
                  value={voteBookTitle}
                  onChange={(e, { name, value }) => setVoteBookTitle(value)}
            />
            <Form.Input
                  label="ISBN"
                  placeholder='9781423389262'
                  name='isbn'
                  value={voteBookIsbn}
                  onChange={(e, { name, value }) => setVoteBookIsbn(value)}
            />
            <Form.Button onClick={handleAddVoteBook} content="Add Book" />
            <Form.Button onClick={handleRemoveVoteBook} content="Remove Book" />
          </Form.Group>
        </Form>

        <h2> Delete Book From Book Recommendations </h2>
        <Form onSubmit={handleDeleteBookRec}>
          <Form.Group widths='equal'>
            <Form.Input
                  label="Book ISBN"
                  placeholder='1234567890123'
                  name='isbn'
                  value={bookRecIsbn}
                  onChange={(e, { name, value }) => setBookRecIsbn(value)}
            />
            <Form.Button content='Delete Event' />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default AdminPanel;
export { AdminPanel };
