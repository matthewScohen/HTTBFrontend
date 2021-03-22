import React, { useState, useEffect, Component } from "react";
import { Card, Form } from "semantic-ui-react";

import VoteBookService from "../services/voteBook.service";
import { sideMenu as Menu } from "./sideMenu.js";
import VoteBookCard from "./VoteBookCard.js";

import ".././App.css";

class Voting extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      const result = await VoteBookService.getVoteBooks();
      setData(result.data);
    }
    fetchData();
  }, []);

  render() {

    let formContent = [];
    for (let i in data) {
      let book = data[i];
      book.ref = isbnEl;
      formContent.push(<VoteBookCard props={book} />);
    }
    const { value } = this.state;
    return (
      <div id="outer-container">
        <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
        <div id="page-wrap">
          <center>
            <h1>Voting</h1>
          </center>
          <Form>
            <Form.Group inline>
              <label>Size</label>
              <Form.Radio
                label="Small"
                value="sm"
                checked={value === "sm"}
                onChange={this.handleChange}
              />
              <Form.Radio
                label="Medium"
                value="md"
                checked={value === "md"}
                onChange={this.handleChange}
              />
              <Form.Radio
                label="Large"
                value="lg"
                checked={value === "lg"}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Button>Submit</Form.Button>
          </Form>
        </div>
      </div>
    );
  }
}
{
  /*
class Voting extends React.Component {
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
render() {

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
}
*/
}

export default Voting;
export { Voting };
