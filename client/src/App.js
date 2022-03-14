import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [listOfArticles, setListOfArticles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/articles").then((response) => {
      setListOfArticles(response.data);
    });
  }, []);
  return (
    <div className="App">
      {listOfArticles.map((value, key) => {
        return <div>{value.name}</div>;
      })}
    </div>
  );
}

export default App;
