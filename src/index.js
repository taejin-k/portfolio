import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ReducersApp from "./reducer";
import App from "./App";
import "./index.css";
import { StrictMode } from "react";

const store = createStore(ReducersApp);

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
