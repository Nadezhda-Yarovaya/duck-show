import React from "react";
import { useSelector } from "react-redux";

function Picture() {
  const currentPicture = useSelector((state) => state.main.currentPic);
  return <img src={currentPicture} alt="утка" className="duck-image" />;
}

export default Picture;
