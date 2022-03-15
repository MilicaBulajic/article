import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
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
};

export default Home;
