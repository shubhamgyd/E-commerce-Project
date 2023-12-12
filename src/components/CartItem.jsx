import React from "react";

const CartItem = ({ item, dispatch }) => {
  return (
    <div>
      <p>{item.name}</p>
      <p>${item.price}</p>
      <button
        onClick={() =>
          dispatch({
            type: "REMOVE_ITEM",
            payload: item.id,
          })
        }
      ></button>
    </div>
  );
};

export default CartItem;
