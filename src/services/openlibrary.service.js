import axios from "axios";

var openlibraryAxiosInstance = axios.create({
  baseURL: 'https://openlibrary.org/api',
  headers: {
    "Content-type": "application/json"
  }
});

class OpenLibraryService {
  getBookFromIsbn(isbn) {
    return openlibraryAxiosInstance.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`);
  }
}

export default new OpenLibraryService();

/* Example of how to use in a component
import OpenLibraryService from '../services/openlibrary.service';

function componentName() {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      const book = await OpenLibraryService.getBookFromIsbn(1234);
      console.log(book.data);
      for(var data2 in book.data) {
        var data = book.data[data2]
      }
      setData(data);
    }
    fetchData();
  }, []);

  console.log(data.title)
  return(...)
}



*/
