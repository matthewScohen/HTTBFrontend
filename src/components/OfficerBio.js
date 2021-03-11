import React from "react";
import '../css/OfficerBio.css';
import { Card, Image } from "semantic-ui-react";

function OfficerBio({ props }) {
  const name = props.name;
  const position = props.position;
  const description = props.description;
  const imageSrc = props.imageSrc;
  return (
    <Card>
      <Image
        src={imageSrc}
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
