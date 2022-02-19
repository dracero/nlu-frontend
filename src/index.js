import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import Navbar from "./Navbar";

ReactDOM.render(
  <Provider store={store}> 
   <Navbar />
  </Provider>,
  document.getElementById("root")
);
