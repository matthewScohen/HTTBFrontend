import axios from "axios";

var voteBookAxiosInstance = axios.create({
  baseURL: 'http://uf-hookedtothebook.club:8080/api/voteBooks/',
  headers: {
    "Content-type": "application/json"
  }
});

class VoteBookService {
  getVoteBooks() {
    //TODO: Modify to only return vote books (books with field isSpoilerBook = false)
    return voteBookAxiosInstance.get("/");
  }

  createVoteBook(title, isbn, isSpoilerBook, password) {
    let voteCount = 0;
    let data = {
      password: password,
      title: title,
      isbn: isbn,
      isSpoilerBook: isSpoilerBook,
      voteCount: voteCount
    }
    return voteBookAxiosInstance.post("/", data);
  }

  updateVoteBookCount(isbn, newCount, password) {
    let data = {
      isbn: isbn,
      voteCount: newCount,
      password: password
    }
    return voteBookAxiosInstance.put("/", data);
  }

  updateSpoilerBook(isbn, title, password) {
    let data = {
      isbn: isbn,
      title: title,
      password: password
    }
    return voteBookAxiosInstance.put("/spoilerBook", data);
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
