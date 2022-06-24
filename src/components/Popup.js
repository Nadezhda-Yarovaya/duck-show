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

  
  const padTop = ((props.height - 240) / 2.5) + 'px';
  const padLeft = ((props.width - 270) / 2) + 'px';
  return (
    <>
      <div style={{top: padTop, left: padLeft}} className={`popup ${props.isOpen && 'popup__visible'}`}>
        <p>{props.loadingMessage}</p>
      </div>
    </>
  );
}

export default Popup;
