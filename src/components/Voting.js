import React from "react";

import { sideMenu as Menu } from "./sideMenu.js";
import VoteBookCard from "./VoteBookCard.js";

import ".././App.css";

function Voting() {
  const votingBooks = [
    { title: "title1", author: "author1", voteCount: 0, ISBN: "9781416997931" },
    { title: "title2", author: "author2", voteCount: 0, ISBN: "9781416997948" }
  ];

  let formContent = [];
  for (let i in votingBooks) {
    const book = votingBooks[i];
    formContent.push(<VoteBookCard props={book} />);
  }

  return (
    //The outer-container contains everything including the menu
    //The page wrap must contain everything on the page except the menu
    <div id="outer-container">
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <center>
          This is the voting page. Stuff for the voting goes here.
        </center>
        <form>
          {formContent}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Voting;
export { Voting };
