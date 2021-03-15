import React from "react";
import { Card, Image } from "semantic-ui-react";

import ".././App.css";

function VoteBookCard({ book }) {
  const title = book.title;
  const author = book.position;
  const ISBN = book.ISBN;

  const [bookData, setBookData] = useState(null);
  const [coverLink, setCoverLink] = useState(null);

  useEffect(async () => {
    const response = await fetch(
      "https://openlibrary.org/isbn/" + ISBN + ".json"
    );
    //const response = await fetch('https://openlibrary.org/api/books?bibkeys=ISBN:' + ISBN + '&jscmd=data&format=json');
    const data = await response.json();
    const bookData = data;
    console.log(bookData);
    setBookData(bookData);
  }, [ISBN]);

  useEffect(async () => {
    const response = await fetch(
      "http://covers.openlibrary.org/b/isbn/" + ISBN + "-L.jpg"
    );
    const data = await response.blob();
    const coverLink = URL.createObjectURL(data);
    setCoverLink(coverLink);
  });

  // generate image from ISBN
  const imageLink = "http://covers.openlibrary.org/b/isbn/" + ISBN + "-L.jpeg";

  return (
    <Card>
      <img id="botm-cover" src={coverLink && `${coverLink}`}></img>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{position}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  );
}

export default VoteBookCard;
export { VoteBookCard };
