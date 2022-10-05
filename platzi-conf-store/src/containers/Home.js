import React, { useContext } from "react";
import styled from "styled-components";

import Product from "../components/Product";
import AppContext from "../context/AppContext";

const Home = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  return (
    <Container>
      <ProductsItems>
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </ProductsItems>
    </Container>
  );
};

const Container = styled.div``;

const ProductsItems = styled.div`
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  grid-row-gap: 1.5em;
  display: grid;
`;

export default Home;
