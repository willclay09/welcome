import React from "react";
import pageNotFoundImage from "../../assets/images/404.jpg";
import "./Error.css";

function Error(props) {
  return (
    <div>
      <img src={pageNotFoundImage} alt="Page Not Found !" />
      <br />
      You Have reached This Page in Error Please Go Back!
    </div>
  );
}

export default Error;
