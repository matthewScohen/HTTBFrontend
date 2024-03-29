import React, { useState, useEffect } from "react";
import { Button, Form, Segment, Table } from "semantic-ui-react";
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

  const [spoilerBookIsbn, setSpoilerBookIsbn] = useState("");
  const [spoilerBookTitle, setSpoilerBookTitle] = useState("");

  async function handleAddEvent() {
    var password = prompt("Please enter the admin password", "Password");
    const response = await (CalendarService.addEvent(addEventTitle, addEventDate, password));
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
    window.location.reload();
  }

  async function handleDeleteEvent() {
    var password = prompt("Please enter the admin password", "Password");
    const response = await (CalendarService.deleteEvent(deleteEventTitle, password));
    alert(response.data.message);
    //Clear form fields after submission
    setDeleteEventTitle("");
    window.location.reload();
  }

  async function handleAddVoteBook() {
    var password = prompt("Please enter the admin password", "Password");
    const response = await (VoteBookService.createVoteBook(voteBookTitle, voteBookIsbn, false, password));
    if(response.data.isbn == voteBookIsbn)
      alert("Book added to poll successfully!");
    else
      alert("There was an error adding the book to the poll.");
    window.location.reload();
  }

  async function handleRemoveVoteBook() {
    var password = prompt("Please enter the admin password", "Password");
    const response = await (VoteBookService.deleteVoteBook(voteBookIsbn, password));
    alert(response.data.message);
    window.location.reload();
  }

  async function handleDeleteBookRec() {
    var password = prompt("Please enter the admin password", "Password");
    const response = await (BookDataService.delete(bookRecIsbn, password));
    alert(response.data.message);
    window.location.reload();
  }

  async function handleUpdateSpoilerBook() {
    var password = prompt("Please enter the admin password", "Password");
    const response = await (VoteBookService.updateSpoilerBook(spoilerBookIsbn, spoilerBookTitle, password));
    setSpoilerBookIsbn("");
    setSpoilerBookTitle("");
    alert(response.data.message);
    window.location.reload();
  }


  const [eventData, setEventData] = useState({});
  const [voteBookData, setVoteBookData] = useState({});
  const [bookRecData, setBookRecData] = useState({});
  const [spoilerBookData, setSpoilerBookData] = useState({});

  useEffect(() => {
    async function fetchCalendarData() {
      /* Get data for events */
      const calendarResult = await CalendarService.getEvents();
      var calendarData = [];
      for(var index in calendarResult.data) {
        var eventInfo = {
          title: calendarResult.data[index].title,
          date: calendarResult.data[index].date
        }
        calendarData.push(eventInfo);
      }
      setEventData(calendarData);
    }

    async function fetchVoteBookData() {
      /* Get data on vote books */
      const voteBookResult = await VoteBookService.getVoteBooks();
      var voteBookDataList = [];
      for(var index in voteBookResult.data) {
        var voteBookInfo = {
          title: voteBookResult.data[index].title,
          isbn: voteBookResult.data[index].isbn
        }
        if(!voteBookResult.data[index].isSpoilerBook) {
          voteBookDataList.push(voteBookInfo);
        } else {
          /*** The spoiler book data is set here ***/
          setSpoilerBookData(voteBookInfo);
        }
      }
      setVoteBookData(voteBookDataList);
    }

    async function fetchBookRecData() {
      const bookRecResult = await BookDataService.getAll();
      var bookRecDataList = [];
      for(var index in bookRecResult.data) {
        var bookRecInfo = {
          title: bookRecResult.data[index].title,
          isbn: bookRecResult.data[index].isbn
        }
        bookRecDataList.push(bookRecInfo);
      }
      setBookRecData(bookRecDataList);
    }

    fetchCalendarData();
    fetchVoteBookData();
    fetchBookRecData();
  }, []);

  console.log(spoilerBookData);

  function renderEventTableData() {
    let eventTableRows = [];
    for(var index in eventData) {
      let row = [
        <Table.Row>
          <Table.Cell>{eventData[index].title}</Table.Cell>
          <Table.Cell>{eventData[index].date}</Table.Cell>
        </Table.Row>
      ];
      eventTableRows.push(row);
    }
    return eventTableRows;
  }

  function renderVoteTableData() {
    let voteTableRows = [];
    for(var index in voteBookData) {
      let row = [
        <Table.Row>
          <Table.Cell>{voteBookData[index].title}</Table.Cell>
          <Table.Cell>{voteBookData[index].isbn}</Table.Cell>
        </Table.Row>
      ];
      voteTableRows.push(row);
    }
    return voteTableRows;
  }

  function renderBookRecTableData() {
    let bookRecTableRows = [];
    for(var index in bookRecData) {
      let row = [
        <Table.Row>
          <Table.Cell>{bookRecData[index].title}</Table.Cell>
          <Table.Cell>{bookRecData[index].isbn}</Table.Cell>
        </Table.Row>
      ];
      bookRecTableRows.push(row);
    }
    return bookRecTableRows;
  }

  function renderSpoilerBookData() {
    let row = [
      <Table.Row>
        <Table.Cell>{spoilerBookData.title}</Table.Cell>
        <Table.Cell>{spoilerBookData.isbn}</Table.Cell>
      </Table.Row>
    ]
    return row;
  }

  return (
    //The outer-container contains everything including the menu
    //The page wrap must contain everything on the page except the menu
    <div id="outer-container">
      <div id="admin-outer">
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <center>
          <h1>Admin Panel</h1>
        </center>
        <div id="forms-container">
          <div id="add-calendar" className="separate-form">

          <Segment inverted>
          <h2>Add event to calendar</h2>
          <Form inverted onSubmit={handleAddEvent}>
            <Form.Group widths="equal">
              <Form.Input
                    fluid
                    label="Event Title"
                    placeholder='GBM #1'
                    name='title'
                    value={addEventTitle}
                    onChange={(e, { name, value }) => setAddEventTitle(value)}
              />
              <Form.Input
                    fluid
                    label="Event Date"
                    placeholder="YYYY-MM-DD"
                    name='date'
                    value={addEventDate}
                    onChange={(e, { name, value }) => setAddEventDate(value)}
              />
              <Form.Button id="formsubmitbutton" content='Add Event' />
            </Form.Group>
          </Form>
          <Table unstackable selectable striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Event Title</Table.HeaderCell>
                <Table.HeaderCell>Event Date</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
            {renderEventTableData()}

          </Table.Body>
          </Table>
          </Segment>
          </div>


        <div id="delete-calendar" className="separate-form">

          <Segment inverted>
        <h2>Delete event from calendar</h2>
        <Form inverted onSubmit={handleDeleteEvent}>
          <Form.Group widths='equal'>
            <Form.Input
                  label="Event Title"
                  placeholder='GBM #1'
                  name='title'
                  value={deleteEventTitle}
                  onChange={(e, { name, value }) => setDeleteEventTitle(value)}
            />
            <Form.Button id="formsubmitbutton" content='Delete Event' />
          </Form.Group>
        </Form>
        <Table unstackable selectable striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Event Title</Table.HeaderCell>
                <Table.HeaderCell>Event Date</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
            {renderEventTableData()}
            </Table.Body>
          </Table>
        </Segment>
        </div>


        <div id="change-vote" className="separate-form">

          <Segment inverted>
        <h2> Add/Remove Book To/From Voting Poll </h2>
        <Form inverted>
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
            <Form.Button id="formsubmitbutton" onClick={handleAddVoteBook} content="Add Book" />
            <Form.Button id="formsubmitbutton" onClick={handleRemoveVoteBook} content="Remove Book" />
          </Form.Group>
        </Form>
        <Table unstackable selectable striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>ISBN</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
            {renderVoteTableData()}

          </Table.Body>
          </Table>
        </Segment>
        </div>

        <div id="delete-rec" className="separate-form">

          <Segment inverted>
        <h2> Delete Book From Book Recommendations </h2>
        <Form inverted onSubmit={handleDeleteBookRec}>
          <Form.Group widths='equal'>
            <Form.Input
                  label="Book ISBN"
                  placeholder='1234567890123'
                  name='isbn'
                  value={bookRecIsbn}
                  onChange={(e, { name, value }) => setBookRecIsbn(value)}
            />
            <Form.Button id="formsubmitbutton" content='Remove Book' />
          </Form.Group>
        </Form>
        <Table unstackable selectable striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>ISBN</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
            {renderBookRecTableData()}

          </Table.Body>
          </Table>
        </Segment>
        </div>


        <div id="update-spoiler" className="separate-form">

          <Segment inverted>
        <h2> Update Spoiler Book </h2>
        <Form inverted onSubmit={handleUpdateSpoilerBook}>
          <Form.Group widths='equal'>
            <Form.Input
                  label="Title"
                  placeholder='The Name of The Wind'
                  name='title'
                  value={spoilerBookTitle}
                  onChange={(e, { name, value }) => setSpoilerBookTitle(value)}
            />
            <Form.Input
                  label="ISBN"
                  placeholder="1234567890123"
                  name='isbn'
                  value={spoilerBookIsbn}
                  onChange={(e, { name, value }) => setSpoilerBookIsbn(value)}
            />
            <Form.Button id="formsubmitbutton" content='Update' />
          </Form.Group>
        </Form>
        <Table unstackable selectable striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>ISBN</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
            {renderSpoilerBookData()}

          </Table.Body>
          </Table>
        </Segment>
        </div>

        </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
export { AdminPanel };
