import React from "react";
import { Table } from "semantic-ui-react";

import "./BookRecs.css";
import ".././App.css";

import { sideMenu as Menu } from "./sideMenu.js";

function BookRecs() {
  let books = [
    {
      title: "book1",
      author: "author1"
    },
    {
      title: "book2",
      author: "author2"
    }
  ];

  let tableContents = [];

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    let row = [
      <Table.Row key={book.title}>
        <Table.Cell>{book.title}</Table.Cell>
        <Table.Cell>{book.author}</Table.Cell>
      </Table.Row>
    ];
    tableContents.push(row);
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
