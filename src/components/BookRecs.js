import React, { useState, useEffect } from "react";
import { Button, Modal, Header, Icon, Form } from "semantic-ui-react";

import "../css/BookRecs.css";
import ".././App.css";

import OpenLibraryService from "../services/openlibrary.service";
import BookDataService from "../services/book.service";

import { sideMenu as Menu } from "./sideMenu.js";

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
  console.log(data);

  let tableContents = [];
  for (var bookIndex in data) {
    if (data[bookIndex] !== undefined) {
      let book = data[bookIndex];
      let row = [
        <tr key={book.title}>
          <td>{book.title}</td>
          <td>{book.author}</td>
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
  const handleSubmit= (e) => {
    e.preventDefault();
    const newBook = {
      title: title,
      author: primaryAuthor,
      isbn: isbn
    }
    BookDataService.create(newBook);
    setISBN('');
    setOpen(false);
  }

  return (
    //The outer-container contains everything including the menu
    //The page wrap must contain everything on the page except the menu
    <div id="outer-container">
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <center>
          <h1>Book Recommendations</h1>
        </center>
        <Modal
          centered={true}
          closeIcon
          open={open}
          trigger={
            <Button basic color='blue' icon labelPosition='left'>
              <Icon name='add square'/>
              Add Book Rec
            </Button>}
          size='mini'
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
        >
          <Header icon='add square' content='Add Book Recommendation' />
          <Modal.Content>
            <Form>
              <Form.Input
                fluid
                type='text'
                name='isbn'
                value={isbn}
                label='ISBN'
                placeholder='ISBN'
                onChange={e => setISBN(e.target.value)}
              />
              <Form.Button color="blue" onClick={handleSubmit}>Submit</Form.Button>
            </Form>
          </Modal.Content>
        </Modal>
        {!tableContents || tableContents.length === 0 ? (
          <center>
            <p>It seems there aren't any book recommendations yet...</p>
          </center>
        ) : (
          <table className="ui celled striped table">
            <thead>
              <tr>
                <th>TITLE</th>
                <th>AUTHOR</th>
              </tr>
            </thead>
            <tbody>{tableContents}</tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default BookRecs;
export { BookRecs };
