import React from "react";
import styled from "styled-components";

const Product = ({ product, addToCart }) => {

  const handleAddToCart = (product) => {
    addToCart(product)
  }
  return (
    <Container>
      <ProductsItem>
        <img src={product.image} alt={product.title} />

        <div className="product-info">
          <h2>
            {product.title} <span>$ {product.price}</span>
          </h2>
          <p>{product.description}</p>
        </div>

        <button onClick={() => handleAddToCart(product)}>Buy</button>
      </ProductsItem>
    </Container>
  );
};

const Container = styled.div``;

const ProductsItem = styled.div`
  text-decoration: none;
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
    1px 3px 8px rgba(39, 44, 49, 0.03);
  border-radius: 5px;
  margin: 0 0 20px 0;
  position: relative;

  img {
    width: 100%;
    height: 200px;
    border-radius: 5px 5px 0 0;
    object-fit: contain;
  }

  .product-info {
    padding: 10px;

    h2 {
      font-size: 18px;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
    }

    span {
      color: #33b13a;
    }

    p {
      font-size: 14px;
      font-weight: 300;
    }
  }

  button {
    background: linear-gradient(to bottom, #63b8ee 5%, #468ccf 100%);
    width: 100%;
    padding: 10px;
    border-radius: 0px 0px 5px 5px;
    border: 0px;
    outline: 0;
    cursor: pointer;
    font-size: 14px;
    font-weight: 300;
    transition: all .2s ease-out;

    &:hover {
      filter: brightness(80%);
    }
  }
`;

export default Product;
