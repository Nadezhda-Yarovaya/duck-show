import React, { useState, useEffect } from 'react';
import Main from './Main';
import Popup from './Popup';
import { Api, getUnsplashDucks } from '../utils/api.js';
import importedPic from '../images/duck-default.jpg';
import { useWindowSize } from '../hooks/useResize';

function App() {
  const [currentPicture, setCurrentPicture] = useState(importedPic);
  const [isOpen, setIsOpen] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [width, height] = useWindowSize();
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  function closePopup() {
    setIsOpen(false);
  }

  useEffect(() => {
    setPicture(pageNumber);
  }, [] );

  function setPicture(pageNumber) {
    setIsOpen(true);
    setLoadingMessage('Загружается, ждите...');
    
    getUnsplashDucks(pageNumber)
      .then((res) => {
        console.log('2nd res: ', res);
        if (res) {
          setCurrentPicture(res.url);
          setIsOpen(false); // закроется только когда фото не подгрузилось, а не в файнелли
          setLoadingMessage('');
        } else {
          setLoadingMessage('Ошибка загрузки CORS');
          setIsOpen(false);
        }
      })
      .catch((err) => {
        console.log('Ошибка в App: ', err);
        setIsOpen(false);
      });
  }



  return (
    <>
      <div className='page'>
        {isOpen && <div className='page__overlay' onClick={closePopup}></div>}
        <Main currentPicture={currentPicture} setPicture={setPicture}/>
      </div>
      <Popup
        isOpen={isOpen}
        loadingMessage={loadingMessage}
        closePopup={closePopup}
        width={width}
        height={height}
      />
    </>
  );
}

export default App;
