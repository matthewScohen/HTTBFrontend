import React, { useState, useEffect } from "react";
import OpenLibraryService from "../services/openlibrary.service";
import "../css/Landing.css";
import { Icon } from "semantic-ui-react";

function BookOfTheMonth({ props }) {
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

  //Return component
  return (
    <div id="spoiler-book">
      <Icon name="book" size="large"></Icon>
        Spoiler Book: 
    

        {bookData && <p><b>{title + " - " + primaryAuthor}</b></p>}
        {/*<img id="botm-cover" src={coverLink && `${coverLink}`}></img>*/}
    </div>
    
  );
}

export default BookOfTheMonth;
export { BookOfTheMonth };
