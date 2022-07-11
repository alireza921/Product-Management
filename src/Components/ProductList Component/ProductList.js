import React, { Component } from "react";
import Product from "../Products Component/Product";
import style from "../ProductList Component/style.module.css";
import {
  useProduct,
  useProductAction,
} from "../product provider/productProvider";

const ProductList = () => {
  const products = useProduct();
  const dispatch = useProductAction();

  const renderProduct = () => {
    if (products.length !== 0) {
      return (
        <div className={style.pList}>
          {products.map((prod, index) => {
            return (
              <Product
                prd={prod}
                key={index}
                onDelete={() => dispatch({ type: "remove", id: prod.id })}
                onIncrement={() => dispatch({ type: "incrmnt", id: prod.id })}
                onDecrement={() => dispatch({ type: "dcrmnt", id: prod.id })}
                changeInput={(e) =>
                  dispatch({ type: "edit", id: prod.id, event: e })
                }
              />
            );
          })}
        </div>
      );
    }
  };

  return (
    <div className={style.pList}>
      {!products.length && <div> goto Shopping </div>}
      {renderProduct()}
    </div>
  );
};

export default ProductList;
