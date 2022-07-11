import { useState } from "react";
import { useProductAction } from "../../product provider/productProvider";
import style from "../searchBar/style.module.css";

const SearchBar = ({ filter }) => {
  const [search, setSearch] = useState("");
  const dispatch = useProductAction();
  const searchHandler = (e) => {
    setSearch(e.target.value);
    dispatch({ type: "filter", selectedOption: filter });
    dispatch({ type: "search", event: e });
    console.log(filter);
  };
  return (
    <div className={style.container}>
      <h3> search By title </h3>
      <input
        type='text'
        onChange={searchHandler}
        value={search}
        placeholder='search by title ... '
      />
    </div>
  );
};

export default SearchBar;
