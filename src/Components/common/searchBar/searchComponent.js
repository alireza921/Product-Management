import { useState } from "react";
import { useProductAction } from "../../product provider/productProvider";
import style from "../searchBar/style.module.css";

const SearchBar = ({ filtered }) => {
  const [search, setSearch] = useState("");
  const dispatch = useProductAction();
  const searchHandler = (e) => {
    // console.log(e.target.value)
    setSearch(e.target.value);
    dispatch({ type: "search", event: e });
    dispatch({ type: "filter", selectedOption: filtered });
    console.log(filtered);
  };
  return (
    <div className={style.container}>
      <h3> search By title </h3>
      <input
        type='text'
        onChange={searchHandler}
        value={search}
        placeholder='search for ... '
      />
    </div>
  );
};

export default SearchBar;
