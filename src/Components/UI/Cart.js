import React,{useState} from "react";
import Classes from "./Cart.module.css";

const Cart = (props) => {
    const [noOfItems,setNoOfItems]=useState(0)
  return (
    <div className={Classes["cart"]}>
      <h4>Your Cart   {noOfItems}</h4>
    </div>
  );
};
export default Cart;
