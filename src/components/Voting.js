import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";

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
  }, []);

  const isbnEl = React.useRef(null);

  const handleSubmit = e => {
    e.preventDefault();

    alert("submit was pressed and " + isbnEl + " was selected");
    VoteBookService.updateVoteBookCount(isbnEl, 1);
  };

  console.log(data);

  let formContent = [];
  for (let i in data) {
    let book = data[i];
    book.ref = isbnEl;
    formContent.push(<VoteBookCard props={book} />);
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
        {!formContent || formContent.length === 0 ? (
          <center>
            <p>It seems there isn't anything to vote on yet...</p>
          </center>
        ) : (
          <form onSubmit={handleSubmit}>
            <Card.Group itemsPerRow={3}>{formContent}</Card.Group>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Voting;
export { Voting };
