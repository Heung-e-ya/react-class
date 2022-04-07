import "./index.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://e70a16c0-ad70-424c-a314-2cf645c7bcd6.mock.pstmn.io/products"
      )
      .then(function (result) {
        console.log(result);
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("error 발생 :", error);
      });
  }, []);

  return (
    <div>
      <div id="banner">
        <img src="../images/images/banners/banner1.png" alt="배너1" />
      </div>
      <h1>판매되는 상품들</h1>

      <div id="product_list">
        {products.map(function (product, index) {
          return (
            <div className="product_card">
              <Link className="product-link" to={`/products/${product.id}`}>
                <div>
                  <img className="product_img" src={product.imageUrl} />
                </div>
                <div className="product_contents">
                  <span className="product_name">{product.name}</span>
                  <span className="product_price">{product.price}</span>
                  <div className="product_seller">
                    <img
                      className="product_avatar"
                      src="./images/images/icons/avatar.png"
                    />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default MainPage;
