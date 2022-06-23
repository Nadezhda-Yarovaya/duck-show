import React from 'react';

function Picture(props) {
  return (
    <>
      <img src={props.currentPicture} alt='утка' className='duck-image' />
    </>
  );
}

export default Picture;
