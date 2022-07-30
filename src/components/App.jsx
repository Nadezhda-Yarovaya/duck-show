import React, { useState, useEffect } from "react";
import Main from "./Main";
import Popup from "./Popup";
import { getUnsplashDucks } from "../utils/api.js";
import { useWindowSize } from "../hooks/useResize";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_ISLOADING,
  CLEAR_ISLOADING,
  SET_CARDS,
  SET_CURRENTCARD,
  SET_POPUPMESSAGE,
  CLEAR_POPUPMESSAGE,
} from "../services/actions";

function App() {
  const [width, height] = useWindowSize();
  const [pageNumber, setPageNumber] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();
  const currentCards = useSelector((state) => state.main.cards);
  const isOpen = useSelector((state) => state.main.isLoading);

  function closePopup() {
    dispatch({ type: CLEAR_ISLOADING });
  }

  useEffect(() => {
    requestApi(pageNumber);
  }, [pageNumber]);

  function setPicture(pageNumber) {
    if (currentIndex === 0) {
      requestApi(pageNumber);
    } else if (currentIndex > 9) {
      setCurrentIndex(0);
      setPageNumber(parseInt(pageNumber) + 1);
    } else {
      dispatch({
        type: SET_CURRENTCARD,
        payload: currentCards[currentIndex]?.urls.small,
      });
      setCurrentIndex(currentIndex + 1);
    }
  }

  function requestApi(pageNumb) {
    dispatch({ type: SET_ISLOADING });
    dispatch({ type: SET_POPUPMESSAGE, payload: "Загружается, ждите..." });

    getUnsplashDucks(pageNumb)
      .then((res) => {
        if (res) {
          dispatch({ type: SET_CARDS, payload: res.results });
          dispatch({
            type: SET_CURRENTCARD,
            payload: res?.results[0].urls.small,
          });
          dispatch({ type: CLEAR_POPUPMESSAGE });
          setCurrentIndex(currentIndex + 1);
        } else {
          dispatch({ type: SET_POPUPMESSAGE, payload: "Ошибка загрузки CORS" });
        }
      })
      .catch((err) => {
        console.log("Ошибка в App: ", err);
      })
      .finally(() => {
        dispatch({ type: CLEAR_ISLOADING }); // закроется только когда фото не подгрузилось, а не в файнелли
      });
  }

  return (
    <>
      <div className="page">
        {isOpen && <div className="page__overlay" onClick={closePopup}></div>}
        <Main setPicture={setPicture} />
      </div>
      <Popup closePopup={closePopup} width={width} height={height} />
    </>
  );
}

export default App;
