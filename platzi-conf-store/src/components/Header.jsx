import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../styles/components/Header.css";

import AppContext from "../context/AppContext";

const Header = () => {
  const { state } = useContext(AppContext);
  const CartElements = state.cart.length;

  return (
    <Container>
      <h1 className="Header-title">
        <Link to="/">PlatziConf Store</Link>
      </h1>

      <div className="Header-checkout">
        {CartElements > 0 && <CartAlert>{CartElements}</CartAlert>}
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
      </div>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: space-between;

  a {
    color: #33b1ff;
  }

  .Header-checkout {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    justify-items: center;
    width: 30px;
    margin: 0 0 0 0.5em;

    .fas {
      font-size: 24px;
    }
  }
`;

const CartAlert = styled.div`
  color: #f08807;
  font-size: 18px;
  margin-top: -25px;
  font-weight: bold;
`;

export default Header;
