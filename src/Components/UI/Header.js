import React from "react";
import classes from "./Header.module.css";
import Cart from "./Cart";

const Header = (props) => {
  return (
    <div>
      <header className={classes["main-header"]}>
        <div className={classes["container"]}>
          <h1>ReactMeals</h1>
          <Cart></Cart>
        </div>
      </header>

      <div className={[classes["showcase"]]}></div>
    </div>
  );
};
export default Header;
