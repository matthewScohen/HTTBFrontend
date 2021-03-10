import React from "react";
import { Card, Image } from "semantic-ui-react";

// import './OfficerBio.css';

function OfficerBio({ props }) {
  const name = props.name;
  const position = props.position;
  const description = props.description;

  return (
    <Card color="teal">
      <Image
        src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
        wrapped
        size="small"
        ui={false}
      />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{position}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  );
}

export default OfficerBio;
export { OfficerBio };
