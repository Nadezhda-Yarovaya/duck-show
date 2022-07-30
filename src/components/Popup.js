import React from "react";
import { useSelector } from "react-redux";

function Popup(props) {
  const isOpen = useSelector((state) => state.main.isLoading);
  const loadingMessage = useSelector((state) => state.main.popupMessage);

  React.useEffect(() => {
    function closeByEsc(e) {
      if (e.key === "Escape") {
        console.log(e.key);
        props.closePopup();
      }
    }
    document.addEventListener("keydown", closeByEsc);
    return () => {
      document.removeEventListener("keydown", closeByEsc);
    };
  }, []);

  const padTop = (props.height - 240) / 2.5 + "px";
  const padLeft = (props.width - 270) / 2 + "px";
  return (
    <>
      <div
        style={{ top: padTop, left: padLeft }}
        className={`popup ${isOpen && "popup__visible"}`}
      >
        <p>{loadingMessage}</p>
      </div>
    </>
  );
}

export default Popup;
