import React, { useState, useEffect } from "react";
import { Card, Image } from "semantic-ui-react";
import OpenLibraryService from "../services/openlibrary.service";


import ".././App.css";

function VoteBookCard({ props }) {
  const ISBN = props.ISBN;
  const [bookData, setData] = useState({});

  //Get data from openlibrary
  useEffect(() => {
    async function fetchData() {
      const book = await OpenLibraryService.getBookFromIsbn(ISBN);
      //Each query returns an object based on the name of the ISBN so we loop through the book.data
      //object to reference the isbn named object without having to hardcode the isbn.
      for (var data2 in book.data) {
        var data = book.data[data2];
        console.log(data.authors[0].name);
      }
      setData(data);
    }
    fetchData();
  }, []);

  //Define text variables
  var coverLink = "";
  var primaryAuthor = "";
  var title = "";

  if (bookData.cover != undefined) {
    coverLink = bookData.cover.large;
  }
  if (bookData.authors != undefined) {
    primaryAuthor = bookData.authors[0].name;
  }
  if (bookData.title != undefined) {
    title = bookData.title;
  }

  <h5>{bookData && <p>{title + " - " + primaryAuthor}</p>}</h5>;

  return (
    <Card>
      <img id="botm-cover" src={coverLink && `${coverLink}`}></img>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{primaryAuthor}</Card.Meta>
      </Card.Content>
    </Card>
  );
}

export default VoteBookCard;
export { VoteBookCard };
