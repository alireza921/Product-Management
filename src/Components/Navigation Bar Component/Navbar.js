import { useProduct } from "../product provider/productProvider";
import './style.css'
const NavBar = () => {
  const products = useProduct();
  const totalItem = products.filter((p) => p.quantity > 0).length;
  return (
    <header className="header">
      <h2>  Product Number  : {totalItem} </h2>
    </header>
  );
};

export default NavBar;
