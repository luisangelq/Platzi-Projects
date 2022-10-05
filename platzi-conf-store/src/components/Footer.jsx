import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <div>
        <p>PlatziConf Store</p>
        <p>All Rights Reserved</p>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 95%;
  font-size: 12px;
  div {
    display: flex;
    justify-content: center;
    gap: 5rem;
  }
`;

export default Footer;
