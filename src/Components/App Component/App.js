import { Component, useState } from "react";
import style from "./style.module.css";
import ProductList from "../ProductList Component/ProductList";
import NavBar from "../Navigation Bar Component/Navbar";
import AppTimer from "../timer Component/AppTimer";
import React from "react";
// import CounterProvider from "../context/counterProvider";
// import CounterOne from "../context/counterOne";
// import CounterReducer from "../useReducer Hook/CounterReducer";
import ProductProvider from "../product provider/productProvider";
import Filter from "../filterComponent/filterproduct";
import SearchBar from "../common/searchBar/searchComponent";

const App = () => {
  return (
    <>
      <ProductProvider>
        <div className={style.app}>
          <NavBar />
          <Filter/>
          <ProductList />
          <AppTimer />
        </div>
      </ProductProvider>
    </>
  );
};

export default App;
