import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import CreateArticle from "./pages/CreateArticle";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/create">Create article post</Link>
        <Navigate>
          <Route path="/" exact component={Home} />
          <Route path="/" exact component={CreateArticle} />
        </Navigate>
      </Router>
    </div>
  );
}

export default App;
