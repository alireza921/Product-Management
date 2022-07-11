import { useState } from "react";
import { useProductAction } from "../product provider/productProvider";
import React from "react";
import Select from "react-select";
import style from "./style.module.css";
import SelectComponent from "../common/selectComponent/selectComponent";
import SearchBar from "../common/searchBar/searchComponent";

const Filter = () => {
  const dispatch = useProductAction();
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const filterOption = [
    { value: "", label: "all" },
    { value: "XS", label: "XS" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XXL", label: "XXL" },
    { value: "3XL", label: "3XL" },
  ];

  const sortOption = [
    { value: "highest", label: "highest" },
    { value: "lowest", label: "lowets" },
  ];

  const filterHandler = (selectedOption) => {
    setFilter(selectedOption);
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sort });

    // console.log(selectedOption);
  };

  const sortHandler = (selectedOption) => {
    // console.log(selectedOption);
    setSort(selectedOption);
    dispatch({ type: "sort", selectedOption });
  };

  return (
    <div>
      <div className={style.container}>
        <SelectComponent
          title={"filtered by the Size ... : "}
          onChange={filterHandler}
          value={filter}
          option={filterOption}
        />

        <SelectComponent
          value={sort}
          option={sortOption}
          onChange={sortHandler}
          title='we sort By price ... : '
        />
      </div>
    </div>
  );
};

export default Filter;
