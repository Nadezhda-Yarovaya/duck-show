import React from 'react';

function Popup(props) {
    return (
        <>
            <div className={`popup ${props.isOpen && 'popup__visible'}`}>
                <div className="popup__container"><p>Загружается, ждите...</p>
                </div>
            </div>
        </>
    );
}

export default Popup;