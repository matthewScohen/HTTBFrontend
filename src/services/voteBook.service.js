import axios from "axios";

var voteBookAxiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/voteBooks/',
  headers: {
    "Content-type": "application/json"
  }
});

class VoteBookService {
  getVoteBooks() {
    //TODO: Modify to only return vote books (books with field isSpoilerBook = false)
    return voteBookAxiosInstance.get("/");
  }

  getVoteBook(isbn) {
    const books = VoteBookService.getVoteBooks();
    for (const book in books) {
      if (book.isbn == isbn) {
        return book;
      }
    }
    return null;
  }

  getVoteBookCount(isbn) {
    return VoteBookService.getVoteBook(isbn).voteCount;
  }

  createVoteBook(title, isbn, isSpoilerBook) {
    let voteCount = 0;
    let data = {
      title: title,
      isbn: isbn,
      isSpoilerBook: isSpoilerBook,
      voteCount: voteCount
    }
    return voteBookAxiosInstance.post("/", data);
  }

  updateVoteBookCount(isbn, change) {
    let data = {
      voteCount: VoteBookService.getVoteBookCount(isbn) + change
    }
    return voteBookAxiosInstance.put(`/${isbn}`, data);
  }

  deleteVoteBook(isbn) {
    return voteBookAxiosInstance.delete(`/${isbn}`);
  }
}

export default new VoteBookService()
