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

  updateVoteBookCount(isbn, newCount) {
    let data = {
      voteCount: newCount
    }
    return voteBookAxiosInstance.put(`/${isbn}`, data);
  }

  deleteVoteBook(isbn, password) {
    let data = {
      isbn: isbn,
      password: password
    }
    return voteBookAxiosInstance.delete("/", { data: data});
  }
}

export default new VoteBookService()
