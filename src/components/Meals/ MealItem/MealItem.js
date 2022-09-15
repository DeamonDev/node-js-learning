import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import PopupContext from "../../../store/popup-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const popupCtx = useContext(PopupContext);

  const onMouseEnterEventHandler = (event) => {
    console.log(popupCtx);
    popupCtx.showPopup({
      popupId: props.id,
      xPos: event.clientX,
      yPos: event.clientY,
    });
  };
  const onMouseLeaveEventHandler = (event) => {
    console.log(popupCtx);
    popupCtx.hidePopup(props.id);
  };

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li
      className={classes.meal}
      onMouseOver={onMouseEnterEventHandler}
      onMouseLeave={onMouseLeaveEventHandler}
    >
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
