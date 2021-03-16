import axios from "axios";

var voteBookAxiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    "Content-type": "application/json"
  }
});

class VoteBookService() {
  getVoteBooks() {
    //TODO: Modify to only return vote books (books with field isSpoilerBook = false)
    return openlibraryAxiosInstance.get("localhost:8080/api/voteBooks/");
  }

  getSpoilerBook() {
    //TODO: Modify to only return the spoiler book (books with field isSpoilerBook = true)
    return openlibraryAxiosInstance.get("localhost:8080/api/voteBooks/");
  }

  createVoteBook(title, isbn, isSpoilerBook) {
    let voteCount = 0;
    let data = {
      title: title,
      isbn: isbn,
      isSpoilerBook: isSpoilerBook,
      voteCount: voteCount
    }
    return openlibraryAxiosInstance.post("localhost:8080/api/voteBooks/", data);
  }

  updateVoteBookCount(isbn, newCount) {

  }

  deleteVoteBook(isbn) {

  }
}

export default new VoteBookService
