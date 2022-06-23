import React from 'react';

function Popup(props) {
  React.useEffect(() => {
    function closeByEsc(e) {
      if (e.key === 'Escape') {
        console.log(e.key);
        props.closePopup();
      }
    }
    document.addEventListener('keydown', closeByEsc);
    return () => {
      document.removeEventListener('keydown', closeByEsc);
    };
  }, []);
  return (
    <>
      <div className={`popup ${props.isOpen && 'popup__visible'}`}>
        <p>{props.loadingMessage}</p>
      </div>
    </>
  );
}

export default Popup;
