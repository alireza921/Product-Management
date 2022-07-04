import React, { Component } from "react";
import Product from "../Products Component/Product";
import style from "../ProductList Component/style.module.css";
import {
  useProduct,
  useProductAction,
} from "../product provider/productProvider";

// class ProductList extends Component {
// updating State
// clickHandler = () => {
//   this.setState({
//     products: [
//       { title: "react", price: "990$", id: 1, quantity: 1 },
//       { title: "Node js", price: "880$", id: 2, quantity: 2 },
//       { title: "Java Script", price: "770$", id: 3, quantity: 3 },
//     ],
//   });
// };

// renderProduct = () => {
//   const { onRemove, onIncrement, onDecrement, changeInput, products } =
//     this.props;
//   if (products.length !== 0) {
//     return (
//       <div className={style.pList}>
//         {products.map((prod, index) => {
//           return (
//             <Product
//               prd={prod}
//               key={index}
//               onDelete={() => onRemove(prod.id)}
//               onIncrement={() => onIncrement(prod.id)}
//               onDecrement={() => onDecrement(prod.id)}
//               changeInput={(e) => changeInput(e, prod.id)}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// };
//   render() {

//     const {products} = this.props
//     return (
//       // <div className={style.pList}>
//       //   {!products.length && <div> goto Shopping </div>}
//       //   {this.renderProduct()}
//       // </div>
// //     );
// //   }
// // }

// export default ProductList;

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
