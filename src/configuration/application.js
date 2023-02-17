import React from "react";
import App from "../views/index";
import store from "./reduxStore";
import { Provider } from "react-redux";

const Application = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Application;
