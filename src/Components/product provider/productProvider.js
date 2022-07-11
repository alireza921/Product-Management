import React, { useContext, useReducer, useState } from "react";
import { productData } from "../../dataBase/productData";
import _ from "lodash";

const ProductContext = React.createContext();
const ProductContextDispatcher = React.createContext();

export const useProduct = () => useContext(ProductContext);
export const useProductAction = () => useContext(ProductContextDispatcher);

// export const useProductAction = () => {
//   const products = useContext(ProductContext);
//   const dispatch = useContext(ProductContextDispatcher);
//   const deletHandler = (id) => {
//     // console.log(id);
//     // const filteredProduct = products.filter((p) => p.id !== id);
//     // // console.log(filteredProduct);
//     // console.log(products);
//     // setProduct(filteredProduct);
//   };

//   const incrementHandler = (id) => {
//     const index = products.findIndex((p) => p.id === id);
//     // console.log(index);
//     const product = { ...products[index] };
//     product.quantity++;
//     // updateProduct : in hamoon clone az state hastesh esmesh o in gozashtam
//     const updateProducts = [...products];
//     updateProducts[index] = product;
//     // console.log(product);
//     setProduct(updateProducts)
//   };

//   const decrementHandler = (id) => {
//     const index = products.findIndex((item) => item.id === id);
//     // console.log(index);

//     const product = { ...products[index] };
//     if (product.quantity === 1) {
//       const selectItem = products.filter((p) => p.id !== id);
//       setProduct(selectItem);
//     } else {
//       const updateProducts = [...products];
//       product.quantity--;
//       updateProducts[index] = product;
//       setProduct(updateProducts);
//     }
//   };

//   const changeHandler = (e, id) => {
//     // console.log(e.target.value);
//     const index = products.findIndex((p) => p.id === id);
//     // console.log(index);

//     const product = { ...products[index] };
//     product.title = e.target.value;
//     const updateProducts = [...products];
//     updateProducts[index] = product;
//     setProduct(updateProducts);
//   };

//   return {
//     changeHandler,
//     incrementHandler,
//     decrementHandler,
//     deletHandler,
//   };
// };

// const initState = [
//   { title: "react", price: "99$", id: 1, quantity: 1 },
//   { title: "Node js", price: "88$", id: 2, quantity: 2 },
//   { title: "Java Script", price: "77$", id: 3, quantity: 3 },
// ];

const reducer = (state, action) => {
  switch (action.type) {
    case "incrmnt": {
      const index = state.findIndex((p) => p.id === action.id);
      // console.log(index);
      const product = { ...state[index] };
      product.quantity++;
      // updateProduct : in hamoon clone az state hastesh esmesh o in gozashtam
      const updateProducts = [...state];
      updateProducts[index] = product;
      // console.log(product);
      return updateProducts;
    }

    case "dcrmnt": {
      const index = state.findIndex((item) => item.id === action.id);
      // console.log(index);

      const product = { ...state[index] };
      if (product.quantity === 1) {
        const selectItem = state.filter((p) => p.id !== action.id);
        return selectItem;
      } else {
        const updateProducts = [...state];
        product.quantity--;
        updateProducts[index] = product;
        return updateProducts;
      }
    }

    case "remove": {
      const filteredProduct = state.filter((p) => p.id !== action.id);
      // console.log(filteredProduct);
      console.log(state);
      return filteredProduct;
    }

    case "edit": {
      const index = state.findIndex((p) => p.id === action.id);
      // console.log(index);

      const product = { ...state[index] };
      product.title = action.event.target.value;
      const updateProducts = [...state];
      updateProducts[index] = product;
      return updateProducts;
    }

    case "filter": {
      const value = action.selectedOption.value;
      console.log(value);
      if (value === "") {
        return productData;
      } else {
        const updatedProduct = productData.filter(
          (p) => p.size.indexOf(value) >= 0
        );
        return updatedProduct;
      }
    }

    case "sort": {
      const value = action.selectedOption.value;
      // console.log(value);
      if (value === "highest") {
        const updatedProduct = _.orderBy(state, ["price"], ["desc"]);
        return updatedProduct;
      } else {
        const updatedProduct = _.orderBy(state, ["price"], ["asc"]);
        return updatedProduct;
      }
    }

    case "search": {
      const value = action.event.target.value;
      if (value === "") {
        return productData;
      } else {
        const filteredProduct = productData.filter((p) =>
          p.title.toLowerCase().includes(value.toLowerCase())
        );
        console.log(filteredProduct);
        return filteredProduct;
      }
    }

    default:
      console.log("deflt");
      return state;
  }
};

const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productData);
  return (
    <ProductContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};
export default ProductProvider;
