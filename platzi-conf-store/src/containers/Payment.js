import React, { useContext, useLa } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PayPalButton } from "react-paypal-button-v2";

import AppContext from "../context/AppContext";
import sumTotal from "../helpers/sumTotal";

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state

  const navigate = useNavigate()

  const paypalOptions = {
    clientId:
      "AYnzhlrKNP0U4cijKUb3ZANrIkP95pd4MhPJUn3d2ydppA51BDZpVbTo8J0O8MhQKJna_hpeNzkWsFQI",
    intent: "capture",
    currency: "USD",
  };

  const buttonStyles = {
    layout: "vertical",
    shape: "rect"
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  };

  return (
    <Container>
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {state.cart.map((product) => (
          <PaymentItems key={product.id}>

          </PaymentItems>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={sumTotal(state) ? sumTotal(state) : "0.0"}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  grid-template-columns: 3fr 1fr;
  grid-gap: 2rem;
  grid-row-gap: 1.5em;
  display: grid;
`;

const PaymentItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default Payment;
