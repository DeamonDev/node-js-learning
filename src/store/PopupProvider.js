import PopupContext from "./popup-context";

const defaultPopupState = {
  currentId: null,
  xPos: null,
  yPos: null,
};

const popupReducer = (state, action) => {
  if (action.type === "SHOW") {
    return {
      currentId: action.popup.id,
      xPos: action.popup.xPos,
      yPos: action.popup.yPos,
    };
  }

  if (action.type === "HIDE") {
    return {
      currentId: null,
      xPos: null,
      yPos: null,
    };
  }

  return {
    currentId: null,
    xPos: null,
    yPos: null,
  };
};

const PopupProvider = (props) => {
  const [popupState, dispatchPopupAction] = useReducer(
    popupReducer,
    defaultPopupState
  );

  const showPopupHandler = (popupInfo) => {
    dispatchPopupAction({ type: "SHOW", popupInfo: popupInfo });
  };

  const hidePopupHandler = (id) => {
    dispatchPopupAction({ type: "HIDE", id: id });
  };

  const popupContext = {
    currentId: popupState.id,
    xPos: popupState.xPos,
    yPos: popupState.yPos,
    showPopup: showPopupHandler,
    hidePopup: hidePopupHandler,
  };

  return (
    <PopupContext.Provider value={popupContext}>
      {props.children}
    </PopupContext.Provider>
  );
};

export default PopupProvider;
