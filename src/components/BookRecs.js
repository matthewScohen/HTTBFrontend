import React, { useState, useEffect } from 'react';
import { Table } from "semantic-ui-react";

import '../css/BookRecs.css';
import ".././App.css";

import BookDataService from '../services/book.service';
import { sideMenu as Menu } from './sideMenu.js';

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
  for(var bookIndex in data)
  {
    if(data[bookIndex] != undefined)
    {
      console.log(data[bookIndex].title)
      let book = data[bookIndex];
      let row = [
        <Table.Row key={book.title}>
          <Table.Cell>{book.title}</Table.Cell>
          <Table.Cell>{book.author}</Table.Cell>
        </Table.Row>
      ];
      tableContents.push(row);
    }
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
        {!tableContents || tableContents.length === 0 ? (
          <p>It seems there aren't any book recommendations yet...</p>
        ) : (
          <Table Table striped selectable unstackable>
            <Table.Header>
              <Table.HeaderCell>TITLE</Table.HeaderCell>
              <Table.HeaderCell>AUTHOR</Table.HeaderCell>
            </Table.Header>
            <Table.Body>{tableContents}</Table.Body>
          </Table>
        )}
      </div>
    </div>
  );
}

export default BookRecs;
export { BookRecs };
