import React from "react";
import styled from "styled-components";

const Success = () => {
  return (
    <Container>
      <div className="Success-content">
        <h2>Nombre, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <Map className="Success-map">Google Maps</Map>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 0 4em 0;
`;

const Map = styled.div`
  margin: 10px 0 0 0;
`;

export default Success;
