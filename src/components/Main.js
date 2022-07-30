import React from 'react';
import Picture from './Picture';

function Main(props) {
  const { isLoading, setPicture, currentPicture} = props;
  return (
    <div className='main'>
      <button className='button' onClick={setPicture}>
        Show another Duck
      </button>
      {isLoading ? <p>Картинка загружается...</p> :
      <Picture
        currentPicture={currentPicture}
      />}
    </div>
  );
}

export default Main;
