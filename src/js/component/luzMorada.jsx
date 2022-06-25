import React, { useState } from "react";


const Modal = () => {
  /**
   *  Using the useState hook, you have to pay atention to 3 elements:
   *  - opened: a variable that will change over time (can have any name)
   *  - setOpened:  a function that resets the value of opened (can by any name)
   *  - useState: this is the hook, it has to be setState and it receives the initial value for "opened"
   */
  const [opened, setOpened] = useState(false);
  const [color,funcionBrillo] = useState(color);

  //if opened === true, I show the modal, else i show the button to open the modal
  return opened ? (
    <div>
      <div className="semaforoLuzMor bg-dark mx-auto d-flex flex-column justify-content-around align-items-center">
      {/* <div className="luzMor rounded-circle"></div> */}
      <div className={color === "morado" ? "luzMor rounded-circle luzON" : "luzMor rounded-circle"} onClick={() => funcionBrillo("morado")}></div>
      </div>
      <button type="button" onClick={() => setOpened(false)}>
        Close
      </button>
    </div>
  ) : (
    <button type="button" onClick={() => setOpened(true)}>
      Open
    </button>
  );
};

export default Modal