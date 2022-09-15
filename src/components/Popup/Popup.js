import { useContext } from "react";
import PopupContext from "../../store/popup-context";

const POPUPS = [
  {
    id: "m1",
    description: "POPUP#1",
  },
  {
    id: "m2",
    description: "POPUP#2",
  },
];

const Popup = (props) => {
  const popupCtx = useContext(PopupContext);
  const isActive = popupCtx.currentId !== null;
};

export default Popup;
