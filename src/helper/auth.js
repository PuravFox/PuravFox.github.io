import { data } from "jquery";
import React from "react";
import { get, post } from "./apiManager";

const getAccessToken = () => {
  fetch("http://localhost:8080/test/getToken", {
    method: "POST",
  })
    .then((response) => response.json())
    .then((res) => {
      localStorage.setItem("token", res.data.token);
    });
};

export { getAccessToken };
