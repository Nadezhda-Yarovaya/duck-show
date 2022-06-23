import React from 'react';
import Main from './Main';
import Popup from './Popup';
import { Api } from '../utils/api.js';
import { useState, useEffect } from 'react';
import importedPic from '../images/duck-default.jpg';

function App() {
  const [currentPicture, setCurrentPicture] = useState(importedPic);
  const [isOpen, setIsOpen] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  // type script
  let tsString: string | number = 'string'; // union type условие - наывается
  //console.log(tsString);
  type StringOrNumber = string | number;

  const newNumber: StringOrNumber = 5;

  type AnyDouble =
    | string
    | number
    | null
    | undefined
    | boolean
    | symbol
    | object
    | []
    | void
    | bigint;
  //уже существует, называется any

  //этот же массив с типом можем
  const tsArray: number[] = [16, 1, 2, 9];
  const tsArray2: StringOrNumber[] = [16, '4', 2, 9];
  //или с дженериком
  const tsArray3: Array<StringOrNumber> = [16, '4', 2, 9];

  //есть тип тапл еще кроме друг типов
  const tsNext: [string, number] = ['1', 2]; // количество и порядок определяем !!

  //эти таплы удобны при деструктуриз.  например
  const [a, b] = tsNext; // при этом а будет строка а намбер номер (20,51))
  function closePopup() {
    setIsOpen(false);
  }

  function setPicture() {
    setIsOpen(true);
    setLoadingMessage('Загружается, ждите...');
    Api()
      .then((res) => {
        if (res) {
          setCurrentPicture(res.url);
          setIsOpen(false); // закроется только когда фото не подгрузилось, а не в файнелли
          //console.log('testDuck', testDuck([1,6,3,8]));
          setLoadingMessage('');
        } else {
          setLoadingMessage('Ошибка загрузки CORS');
        }
      })
      .catch((err) => {
        console.log('Ошибка в App: ', err);
      });
  }

  const testDuck = (arr: number[]) => arr.reduce((a, b) => a + b);

  return (
    <>
      <div className='page'>
        {isOpen && <div className='page__overlay' onClick={closePopup}></div>}
        <Main currentPicture={currentPicture} setPicture={setPicture} />
      </div>
      <Popup
        isOpen={isOpen}
        loadingMessage={loadingMessage}
        closePopup={closePopup}
      />
    </>
  );
}

export default App;
