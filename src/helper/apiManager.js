import { getAccessToken } from "./auth";

const get = (url) => {
  var token = localStorage.getItem("token");

  return fetch(url, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(`${e}`.includes("Invalid Token"));
      if (`${e}`.includes("Invalid Token")) {
        getAccessToken();
      }
    });
};

const post = (url, data) => {
  var token = localStorage.getItem("token");

  return fetch(url, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
    },
    body: data,
  })
    .then((response) => response.json())
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(`${e}`.includes("Invalid Token"));
      if (`${e}`.includes("Invalid Token")) {
        getAccessToken();
      }
    });
};

// const getRefreshToken = () => {
//   var refreshToken = localStorage.getItem("refreshToken");

//   return fetch("http://localhost:8080/refreshToken", {
//     method: "GET",
//     body: { refreshToken },
//   })
//     .then((response) => response.json())
//     .then((res) => {
//       return res;
//     });
// };

export { get, post };
