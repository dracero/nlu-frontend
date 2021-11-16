import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Navbar from "./Navbar";

ReactDOM.render(
  <Navbar />,
  document.getElementById("root")
);

const url = "http://localhost:3000/";

export default url;
