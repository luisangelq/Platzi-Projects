import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AppContext from "../context/AppContext";
import sumTotal from "../helpers/sumTotal";

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <Container>
      <CheckoutContent>
        <h3>{state.cart.length > 0 ? "Lista de pedidos" : "No hay pedidos"}</h3>
        {state.cart.map((product) => (
          <div key={product.id} className="checkout-item">
            <div className="checkout-element">
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <span>$ {product.price}</span>
            </div>

            <button
              className="fas fa-trash-alt"
              onClick={() => handleRemove(product)}
            ></button>
          </div>
        ))}
      </CheckoutContent>

      <CheckoutSideBar>
        <h3>Precio Total: $ {sumTotal(state)}</h3>

        <Link to="/checkout/information">
          <button type="button">Continue Order</button>
        </Link>
      </CheckoutSideBar>
    </Container>
  );
};

const Container = styled.div`
  grid-template-columns: 3fr 1fr;
  grid-gap: 2rem;
  grid-row-gap: 1.5em;
  display: grid;
  padding: 0 0 4em 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CheckoutContent = styled.div`
  .checkout-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0 0 0;

    button {
      background-color: transparent;
      border: none;
      outline: none;
      color: #dc3545;
      cursor: pointer;
      font-size: 18px;
      margin-left: 1rem;
    }
  }

  .checkout-element {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #eee;

    h4 {
      margin: 0;
    }

    img {
      max-width: 100px;
      border-radius: 5px 5px 0 0;
      object-fit: contain;
    }
  }
`;

const CheckoutSideBar = styled.div`
  button {
    box-shadow: inset 0px 1px 0px 0px #bee2f9;
    background: linear-gradient(to bottom, #63b8ee 5%, #468ccf 100%);
    background-color: #63b8ee;
    border-radius: 6px;
    border: 1px solid #3866a3;
    display: inline-block;
    cursor: pointer;
    color: #14396a;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #7cacde;
    width: 100%;
    display: block;
    outline: none;
  }
`;

export default Checkout;
