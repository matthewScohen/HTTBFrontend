import axios from "axios";

var voteBookAxiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    "Content-type": "application/json"
  }
});

class VoteBookService() {
  getVoteBooks() {

  }

  createVoteBook(title, isbn, isSpoilerBook) {
    let voteCount = 0;
  }

  updateVoteBookCount(isbn, newCount) {

  }

  deleteVoteBook(isbn) {

  }
}

export default new VoteBookService
