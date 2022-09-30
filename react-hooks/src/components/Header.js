import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Container>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </Container>
  );
};

const Container = styled.div``;

export default Header;
