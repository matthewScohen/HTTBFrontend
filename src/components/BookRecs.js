import React, { useState, useEffect } from "react";
import { Button, Modal, Header, Icon, Form } from "semantic-ui-react";

import "../css/BookRecs.css";
import ".././App.css";

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

  function bookRecForm() {
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const handleSubmit= (e) => {
      const newBook = {
        title: title,
        author: author,
        isbn: 1234567890
      }
      BookDataService.create(newBook);
      setOpen(false);
      e.preventDefault();
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
          closeIcon
          open={open}
          trigger={
            <Button basic color='blue' icon labelPosition='left'>
              <Icon name='add square'/>
              Add Book Rec
            </Button>}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          size="tiny"
        >
          <Header icon='add square' content='Add Book Recommendation' />
          <Modal.Content>
            <Form>
              <Form.Input
                fluid
                type='text'
                name='title'
                value={title}
                label='Book Title'
                placeholder='Book Title'
                onChange={e => setTitle(e.target.value)}
                />
              <Form.Input
                fluid
                type='text'
                name='author'
                value={author}
                label='Author'
                placeholder='Author'
                onChange={e => setAuthor(e.target.value)}
              />
              {/*
              <Form.Input
                fluid
                label='Genres (separate with commas)'
                value={values.genres}
                placeholder='Genres'
              />
              */}
              <Form.Button color="blue" onClick={handleSubmit}>Submit</Form.Button>
            </Form>
          </Modal.Content>
          {/*
          <Modal.Actions>
            <Button color='green' onClick={() => setOpen(false)}>
              <Icon name='checkmark' /> Add
            </Button>
          </Modal.Actions>
          */}
        </Modal>
        {!tableContents || tableContents.length === 0 ? (
          <p>It seems there aren't any book recommendations yet...</p>
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
