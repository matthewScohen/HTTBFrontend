import React, { useState, useEffect } from "react";
import '../css/Landing.css';




// Function to get the book information (Title, Author from the ISBN)



function BookOfTheMonth({ props }) {
    const ISBN = props.ISBN;
    const [bookData, setBookData] = useState(null);
    const [coverLink, setCoverLink] = useState(null);
    
    

    useEffect(async () => {
        const response = await fetch('https://openlibrary.org/isbn/' + ISBN + '.json');
        //const response = await fetch('https://openlibrary.org/api/books?bibkeys=ISBN:' + ISBN + '&jscmd=data&format=json');
        const data = await response.json();
        const bookData = data;
        console.log(bookData);
        setBookData(bookData);
    }, [ISBN]);

    useEffect(async() => {
        const response = await fetch("http://covers.openlibrary.org/b/isbn/" + ISBN + "-L.jpg");
        const data = await response.blob();
        const coverLink = URL.createObjectURL(data);
        setCoverLink(coverLink);
    })
    
    // generate image from ISBN
    const imageLink = "http://covers.openlibrary.org/b/isbn/" + ISBN + "-L.jpeg";


  return (
    <div id="botm-container">
                <img id="botm-cover"src={coverLink && `${coverLink}`}></img>
                    <div id="botm-text">
                        <h2>SPOILER BOOK</h2>
                        <h5>{bookData && <p>{bookData.title + " - Author"}</p>}</h5>
                        <a href="github.com">link</a>
                    </div>
                </div>

  );
}

export default BookOfTheMonth;
export { BookOfTheMonth };
