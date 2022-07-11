import { useContext, useEffect } from "react";
import { User2Context, UserContext } from "../App Component/App";
import style from "./style.module.css";
import { FaTrash } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
const Product = ({ prd, onDecrement, onDelete, onIncrement }) => {

  return (
    <div className={style.product}>
      <div className={style.detail}>
        <p> product Name : {prd.title} course </p>
        <p> Price : {prd.price} </p>
      </div>
      <p className={style.qty}> {prd.quantity} </p>
      <div className={style.btnContainer}>
        <button
          className={` ${style.btn}  ${prd.quantity === 1 && style.btnRemove} `}
          onClick={onDecrement}>
          {prd.quantity > 1 ? "-" : <FaTrash />}
        </button>
        <button className={style.btn} onClick={onIncrement}>
          +
        </button>
        <button className={style.deleteBtn} onClick={onDelete}>
          <TiDelete />
        </button>
      </div>
    </div>
  );
};

export default Product;
