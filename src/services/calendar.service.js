import axios from "axios";

var calendarAxiosInstance = axios.create({
  baseURL: 'http://uf-hookedtothebook.club:8080/api/calendarEvents/',
  headers: {
    "Content-type": "application/json"
  }
});

class CalendarService {
  getEvents() {
    return calendarAxiosInstance.get("/");
  }

  addEvent(title, date, password) { //Date format is YYYY-MM-DD
    let data = {
      title: title,
      date: date,
      password: password
    }
    return calendarAxiosInstance.post("/", data);
  }

  deleteEvent(title, password) {
    let data = {
      title: title,
      password: password
    }
    return calendarAxiosInstance.delete("/", { data: data});
  }
}

export default new CalendarService();
