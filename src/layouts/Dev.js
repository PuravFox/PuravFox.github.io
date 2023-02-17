import { get } from "helper/apiManager";
import { Button } from "react-bootstrap";

const Dev = () => {
  const getAuthToken = () => {
    return fetch("http://localhost:8080/test/getToken", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((res) => {});
  };

  return (
    <>
      <Button onClick={getAuthToken}>Get Token</Button>
    </>
  );
};

export default Dev;
