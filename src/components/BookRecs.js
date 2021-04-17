import React, { useState, useEffect } from "react";
import { Button, Modal, Header, Popup, Icon, Form, Input } from "semantic-ui-react";

import "../css/BookRecs.css";
import ".././App.css";

import OpenLibraryService from "../services/openlibrary.service";
import BookDataService from "../services/book.service";

import { sideMenu as Menu } from "./sideMenu.js";
import Footer from "./Footer.js";

function BookRecs() {
  /*
  Code that accesses an API has to be done like this (with promise syntax) since you have to
  wait for the API to respond before using the results of the call.
  */
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      const result = await BookDataService.getAll();
      setData(result.data);
    }
    fetchData();
  }, []);
  /* From here on you can access the data object which is an array of book objects.
     Any code that access data will run once when the page loads and then again when the
     API returns.
  */
  let tableContents = [];
  for (var bookIndex in data) {
    if (data[bookIndex] !== undefined) {
      let book = data[bookIndex];
      let row = [
        <tr key={book.title}>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.triggerWarnings}</td>
          <td>{book.notes}</td>
        </tr>
      ];
      tableContents.push(row);
    }
  }

  const [open, setOpen] = React.useState(false);

  const [bookData, setBookData] = useState({});

  //Get data from openlibrary
  useEffect(() => {
    async function fetchData() {
      const book = await OpenLibraryService.getBookFromIsbn(isbn);
      //Each query returns an object based on the name of the ISBN so we loop through the book.data
      //object to reference the isbn named object without having to hardcode the isbn.
      for (var data2 in book.data) {
        var data = book.data[data2];
      }
      setBookData(data);
    }
    fetchData();
  });

  //Define text variables
  var primaryAuthor = "";
  var title = "";

  if(bookData) {
    if (bookData.authors != undefined) {
      primaryAuthor = bookData.authors[0].name;
    }
    if (bookData.title != undefined) {
      title = bookData.title;
    }
  }

  const [isbn, setISBN] = useState();
  const [notes, setNotes] = useState();
  const [triggerWarnings, setTriggerWarnings] = useState();
  const handleSubmit= (e) => {
    e.preventDefault();

    var password = prompt("Enter the secret member voting password! (Contact the club officers to get this password)");
    const newBook = {
      title: title,
      author: primaryAuthor,
      isbn: isbn,
      triggerWarnings: triggerWarnings,
      notes: notes,
      password: password
    }
    console.log(newBook);
    BookDataService.create(newBook);
    setISBN('');
    setTriggerWarnings('');
    setNotes('');
    setOpen(false);
    window.location.reload();
  }

  return (
    //The outer-container contains everything including the menu
    //The page wrap must contain everything on the page except the menu
    <div id="outer-container">
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap" class="background-color">
        <div id="footer-flex">
          <div id="page">
            <center>
              <h1>Book Recommendations</h1>
            </center>
            <div id="content">
              <Modal
                centered={true}
                closeIcon
                open={open}
                trigger={
                  <Button id="btn" icon labelPosition='left' floated='right'>
                    <Icon name='add square'/>
                    Add Book Rec
                  </Button>}
                size='tiny'
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
              >
                <Header icon='add square' content='Add Book Recommendation' />
                <Modal.Content>
                  <Form>
                    <Form.Field>
                      <label id="isbn-label">ISBN
                    <Popup
                      content='The International Standard Book Number (ISBN) is a 13-digit number that uniquely identifies books and book-like products published internationally.'
                      trigger={
                        <Icon id="isbn-popup" name="question circle outline" />
                      }
                    />
                    </label>
                      <a id="isbn-link" href="https://isbnsearch.org/" target="_blank">
                      <p>Click here to search for ISBNs</p>
                    </a>
                    <input
                      fluid
                      type='text'
                      name='isbn'
                      value={isbn}
                      placeholder='ISBN'
                      onChange={e => setISBN(e.target.value)}
                    />
                    </Form.Field>
                    <Form.TextArea
                      fluid
                      type='text'
                      maxLength="255"
                      name='triggerWarnings'
                      value={triggerWarnings}
                      label='Trigger Warnings'
                      placeholder='Trigger Warnings'
                      onChange={e => setTriggerWarnings(e.target.value)}
                    />
                    <Form.TextArea
                      fluid
                      type='text'
                      maxLength="1000"
                      name='notes'
                      value={notes}
                      label='Notes'
                      placeholder='Notes'
                      onChange={e => setNotes(e.target.value)}
                    />
                    <Form.Button color="blue" onClick={handleSubmit}>Submit</Form.Button>
                  </Form>
                </Modal.Content>
              </Modal>
              {!tableContents || tableContents.length === 0 ? (
                <center>
                  <p class="nothing-yet">There are no book recommendations yet.</p>
                </center>
              ) : (
                <table className="ui celled striped table unstackable">
                  <thead>
                    <tr>
                      <th>TITLE</th>
                      <th>AUTHOR</th>
                      <th>TRIGGER WARNINGS</th>
                      <th>NOTES</th>
                    </tr>
                  </thead>
                  <tbody>{tableContents}</tbody>
                </table>
              )}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default BookRecs;
export { BookRecs };
