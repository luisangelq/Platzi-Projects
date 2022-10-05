import React, { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import AppContext from "../context/AppContext";

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get("name"),
      email: formData.get("email"),
      address: formData.get("address"),
      apto: formData.get("apto"),
      city: formData.get("city"),
      country: formData.get("country"),
      state: formData.get("state"),
      cp: formData.get("cp"),
      phone: formData.get("phone"),
    };

    addToBuyer(buyer);
    navigate("/checkout/payment");
  };

  return (
    <Container>
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <InfoForm>
          <form ref={form}>
            <input type="text" placeholder="Complete Name" name="name" />
            <input type="email" placeholder="Email" name="email" />
            <input type="text" placeholder="Address" name="address" />
            <input type="text" placeholder="apto" name="apto" />
            <input type="text" placeholder="City" name="city" />
            <input type="text" placeholder="Country" name="country" />
            <input type="text" placeholder="State" name="state" />
            <input type="text" placeholder="Postal Code" name="cp" />
            <input type="text" placeholder="Phone" name="phone" />
          </form>
        </InfoForm>
        <InfoBtn>
          <Link to="/checkout">
            <div className="back">
              <i className="fas fa-backward"></i> Return{" "}
            </div>
          </Link>

          <button className="next" onClick={() => handleSubmit()}>
            Pay <i className="fas fa-money-bill"></i>{" "}
          </button>
        </InfoBtn>
      </div>
      <InfoSideBar>
        <h3>Pedido:</h3>
        {state.cart.map((product) => (
          <div key={product.id} className="info-item">
            <div className="info-element">
              <h4>{product.title}</h4>
              <span>${product.price}</span>
            </div>
            <img src={product.image} alt={product.title} />
          </div>
        ))}
      </InfoSideBar>
    </Container>
  );
};

const Container = styled.div`
  grid-template-columns: 2fr 1fr;
  grid-gap: 2rem;
  grid-row-gap: 1.5em;
  display: grid;
  margin: 0 0 4em 0;
`;

const InfoForm = styled.div`
  input {
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    color: rgba(0, 0, 0, 0.75);
    display: inline-block;
    font-feature-settings: "tnum";
    font-size: 14px;
    height: 32px;
    line-height: 32px;
    list-style: none;
    margin: 0 0 8px 0;
    outline: 0;
    padding: 4px 12px;
    width: 100%;
    box-sizing: border-box;
  }
`;

const InfoBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .next {
    box-shadow: inset 0px 1px 0px 0px #bee2f9;
    background: linear-gradient(to bottom, #63b8ee 5%, #468ccf 100%);
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
    outline: none;
  }
`;

const InfoSideBar = styled.div`
  .info-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    border-bottom: 1px solid lightgray;
    img {
      max-width: 100px;
      margin-left: auto;
    }
  }

  .info-element {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default Information;
