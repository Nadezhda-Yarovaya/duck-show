import React from 'react';
import Main from './Main';
import Popup from './Popup';
import { Api } from '../utils/api.js';
import { useState, useEffect } from "react";
import importedPic from '../images/duck-default.jpg';


function App() {
  const [currentPicture, setCurrentPicture] = useState(importedPic);
  const [isOpen, setIsOpen] = useState(false);


  function setPicture() {
    setIsOpen(true);
    Api()
      .then(res => {
        setCurrentPicture(res.url);
        setIsOpen(false); // закроется только когда фото не подгрузилось, а не в файнелли      
      })
      .catch(err => console.log('still error: ' + err))
  }

  return (
    <>
      <div className='page'>
        {isOpen && (<div className='page__overlay'></div>)}
        <Main currentPicture={currentPicture} setPicture={setPicture} />
      </div>
      <Popup isOpen={isOpen} />
    </>
  );
}

export default App;
