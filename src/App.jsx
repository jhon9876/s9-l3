import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import books from "./books/fantasy.json";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <SingleBook bookInformation={books[0]} />
      {/* <AllTheBooks /> */}
      <MyFooter />
    </div>
  );
}

export default App;
