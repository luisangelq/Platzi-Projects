import React from "react";
import styled from "styled-components";

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <Container>
      <input
        type="text"
        value={search}
        ref={searchInput}
        onChange={() => handleSearch()}
      />
    </Container>
  );
};

const Container = styled.div``;

export default Search;
