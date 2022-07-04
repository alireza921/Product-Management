import { useProduct } from "../product provider/productProvider";

const NavBar = () => {
  const products = useProduct();
  const totalItem = products.filter((p) => p.quantity > 0).length;
  return (
    <header>
      <h2>the zad is : {totalItem} </h2>
    </header>
  );
};

export default NavBar;
