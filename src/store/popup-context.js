import React from "react";

const PopupContext = React.createContext({
  currentId: null,
  xPos: null,
  yPos: null,
  showPopup: (popup) => {},
  hidePopup: (id) => {},
});

export default PopupContext;
