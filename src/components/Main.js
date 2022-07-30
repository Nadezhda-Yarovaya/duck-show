import React from "react";
import Picture from "./Picture";

function Main(props) {
  const { setPicture } = props;
  return (
    <div className="main">
      <button className="button" onClick={setPicture}>
        Show another Duck
      </button>
      <Picture />
    </div>
  );
}

export default Main;
