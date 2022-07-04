import { useContext, useEffect } from "react";
import { User2Context, UserContext } from "../App Component/App";
import style from "./style.module.css";

const Product = ({ prd, changeInput, onDecrement, onDelete, onIncrement }) => {
//   console.log("product mount ");
//   useEffect(() => {
//       console.log("use efect - product.js");
//       return () => { console.log("unmount cmp ! use efect ");}
//   },[])

  return (
    <div className={style.product}>
      <p> product Name : {prd.title} course </p>
      <p> Price : {prd.price} </p>
      <p className={style.qty}> {prd.quantity} </p>
      <input
        className={style.input}
        type='text'
        onChange={changeInput}
        value={prd.title}
      />
      <button
        className={` ${style.btn}  ${prd.quantity === 1 && style.btnRemove} `}
        onClick={onDecrement}>
        {" "}
        {prd.quantity > 1 ? "-" : "dcr"}{" "}
      </button>
      <button className={style.btn} onClick={onIncrement}>
        {" "}
        +{" "}
      </button>
      <button className={style.btn} onClick={onDelete}>
        {" "}
        **
      </button>
    </div>
  );
};

export default Product;
