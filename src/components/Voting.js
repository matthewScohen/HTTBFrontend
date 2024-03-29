import React, { useState, useEffect } from "react";
import {Radio, Form, Button} from 'semantic-ui-react';
import VoteBookService from "../services/voteBook.service";
import { sideMenu as Menu } from "./sideMenu.js";
import VoteBookCard from "./VoteBookCard.js";

import ".././App.css";
import '../css/Voting.css';

function Voting() {
  /*
  Code that accesses an API has to be done like this (with promise syntax) since you have to
  wait for the API to respond before using the results of the call.
  */
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const result = await VoteBookService.getVoteBooks();
      setData(result.data);
    }
    fetchData();
  }, []); //The empty array keeps this function from being called continuously

  /*
  END API CODE
  */
  const [selectedBook, setValue] = useState({});
  const handleChange = (event, {value}) => setValue({ value });

  function onSubmit() {
    if(selectedBook != undefined) {
      var currentBook = selectedBook.value;
      console.log(selectedBook.value.isbn, selectedBook.value.voteCount+1);
      var password = prompt("Enter the secret member voting password! (Contact the club officers to get this password)");
      VoteBookService.updateVoteBookCount(currentBook.isbn, currentBook.voteCount+1, password);
      //Refresh the page to update the vote count
      window.location.reload();
    }
    else {
      alert("No book selected!");
    }
  }

  function createVoteCardFormField(book) {
    console.log(selectedBook.value);
    var label = book.title + " " + book.voteCount;
    return (
      <div>
        <VoteBookCard props={{ ISBN: book.isbn }} />
          <Form.Field>
            <div id="vote-radio">
            <Radio 
              label={label}
              name='radioGroup'
              value={book}
              checked={
                //THE UNDEFINED CHECK MUST COME BEFORE CHECKING THE VALUE OTHERWISE THE PROGRAM
                //TIRES TO READ THE ISBN OF VALUE WHICH WILL BE UNDEFINED BEFORE THE FIRST SELECTION
                selectedBook.value != undefined && selectedBook.value.isbn === book.isbn
              }
              onChange={handleChange}
            />
            </div>
          </Form.Field>
      </div>
    )
  }

  function createVoteCardFormFieldList(bookList) {
    var fields = bookList.map(createVoteCardFormField);
    return fields;
  }

  let bookList = [];
  if(data[0] != undefined) {
      for(var bookIndex in data)
      {
        console.log(data[bookIndex].title);
        if(!data[bookIndex].isSpoilerBook) {
          bookList.push(data[bookIndex]);
        }
      }

  }

  return (
    //The outer-container contains everything including the menu
    //The page wrap must contain everything on the page except the menu
    <div id="outer-container">
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap" class="background-color">
        <center>
          <h1>Voting</h1>
        </center>
      <div id="vote-holder">
        <Form>
          <Form.Group widths='equal'>
            {createVoteCardFormFieldList(bookList)}
          </Form.Group>
        </Form>
        </div>
        {createVoteCardFormFieldList(bookList).length > 0 ? (
          <div id="submit-button">
          <Button secondary size="large" onClick={onSubmit}>Submit</Button>
          </div>
        ) : (
          <center>
            <p class="nothing-yet">There is nothing to vote on yet.</p>
          </center>
        )}
      </div>
    </div>
  );
}

export default Voting;
export { Voting };
