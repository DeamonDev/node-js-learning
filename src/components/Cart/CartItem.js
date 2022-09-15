import { useContext } from "react";
import PopupContext from "../../store/popup-context";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const popupCtx = useContext(PopupContext);
  const price = `$${props.price.toFixed(2)}`;

  const onMouseEnterEventHandler = (event) => {
    popupCtx.showPopup({
      popupId: props.key,
      xPos: event.clientX,
      yPos: event.clientY,
    });
  };
  const onMouseLeaveEventHandler = (event) => {
    popupCtx.hidePopup(props.key);
  };

  return (
    <li
      className={classes["cart-item"]}
      onMouseEnter={onMouseEnterEventHandler}
      onMouseLeave={onMouseLeaveEventHandler}
    >
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
