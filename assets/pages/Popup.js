import React from "react";

const Popup = ({ setIsPopup }) => {
  return (
    <div className="popUp">
      <div className="popUpText">
        <p>This is just an example. Please create your own post</p>
        <button onClick={() => setIsPopup(false)} className="btn btn-showup">
          X
        </button>
      </div>
    </div>
  );
};

export default Popup;
