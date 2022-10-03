import React, { useState, useContext } from "react";
import styled from "styled-components";

import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const color = useContext(ThemeContext)

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
