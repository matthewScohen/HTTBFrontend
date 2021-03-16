import React from "react";
import { Form } from "semantic-ui-react";

import VoteBookCard from "./VoteBookCard.js";
import { sideMenu as Menu } from "./sideMenu.js";

import ".././App.css";

function Voting() {
  const votingBooks = [
    { ISBN: "9781416947202" },
    { ISBN: "1442494425" }
  ];

  let formContent = [];
  for (let book in votingBooks) {
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
        <Form>
        {formContent}
          <Form.Button type="submit">Submit</Form.Button>
        </Form>
      </div>
    </div>
  );
}

export default Voting;
export { Voting };
