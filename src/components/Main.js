
import React from 'react';
import Picture from './Picture';

function Main(props) {
    return (
        <div className='main'>
            <button className="button" onClick={props.setPicture}>Show another Duck</button>
            <Picture currentPicture={props.currentPicture} setPicture={props.setPicture} />
        </div>

    );
}

export default Main;
