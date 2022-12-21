// import logo from "./logo.svg";
import "./App.css";
import Appbar from "./component/Appbar";
import AddStudent from "./component/AddStudent";
import DisplayStudent from "./component/DisplayStudent";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Appbar />
      <AddStudent />
      <DisplayStudent />
      <Footer />
    </div>
  );
}

export default App;
