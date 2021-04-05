import axios from "axios";

var calendarAxiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/calendarEvents/',
  headers: {
    "Content-type": "application/json"
  }
});

class CalendarService {
  getEvents() {
    return calendarAxiosInstance.get("/");
  }

  addEvent(title, date) { //Date format is YYYY-MM-DD
    let data = {
      title: title,
      date: date
    }
    return calendarAxiosInstance.post("/", data);
  }

  deleteEvent(title) {
    return calendarAxiosInstance.delete(`/${title}`);
  }
}

export default new CalendarService();
