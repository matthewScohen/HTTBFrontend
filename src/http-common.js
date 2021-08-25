import axios from "axios";

export default axios.create({
  baseURL: "http://uf-hookedtothebook.club:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});
