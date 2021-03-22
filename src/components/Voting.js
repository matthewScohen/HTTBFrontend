import React, { useState, useEffect } from "react";
import {Radio, Form} from 'semantic-ui-react';
import VoteBookService from "../services/voteBook.service";
import { sideMenu as Menu } from "./sideMenu.js";
import VoteBookCard from "./VoteBookCard.js";

import ".././App.css";

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
  const [value, setValue] = useState({});
  const handleChange = (event, {value}) => setValue({ value });

  function createVoteCardFormField(isbn) {
    console.log(value.value);
    return (
      <div>
        <VoteBookCard props={{ ISBN: isbn }} />
          <Form.Field>
            <Radio
              label={isbn}
              name='radioGroup'
              value={isbn}
              checked={value.value === isbn}
              onChange={handleChange}
            />
          </Form.Field>
      </div>
    )
  }

  function createVoteCardFormFieldList(isbnList) {
    var fields = isbnList.map(createVoteCardFormField);
    return fields;
  }

  let isbnList = [];
  if(data[0] != undefined) {
      for(var bookIndex in data)
      {
        console.log(data[bookIndex].title);
        isbnList.push(data[bookIndex].isbn);
      }

  }

  return (
    //The outer-container contains everything including the menu
    //The page wrap must contain everything on the page except the menu
    <div id="outer-container">
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <center>
          <h1>Voting</h1>
        </center>


        <Form>
          <Form.Group widths='equal'>
            {createVoteCardFormFieldList(isbnList)}
          </Form.Group>
        </Form>

      </div>
    </div>
  );
}

export default Voting;
export { Voting };
