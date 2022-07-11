import style from "./style.module.css";
import ProductList from "../ProductList Component/ProductList";
import NavBar from "../Navigation Bar Component/Navbar";
import React from "react";
import ProductProvider from "../product provider/productProvider";
import Filter from "../filterComponent/filterproduct";

const App = () => {
  return (
    <>
      <ProductProvider>
        <div className={style.app}>
          <NavBar />
          <Filter/>
          <ProductList />
        </div>
      </ProductProvider>
    </>
  );
};

export default App;
