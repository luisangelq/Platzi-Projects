import {useState} from "react";
import styled from "styled-components";

function TodoSearch({search, setSearch}){
    

    const handleSearch = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }
    return(
        <SearchInput placeholder="Cebolla" value={search} onChange={handleSearch}/>
    );
}

const SearchInput = styled.input`
  background: #F9FBFC;
  border-radius: 2px;
  border: 2px solid #202329;
  margin: 0 24px;
  height: 64px;
  width: calc(100% - 62px);
  font-size: 24px;
  text-align: center;
  font-family: 'Montserrat';
  font-weight: 400;
  color: #1E1E1F;
  box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.25);  

  &::placeholder {
    color: #A5A5A5;
  font-family: 'Montserrat';
  font-weight: 400;
  }

  &:focus {
    outline-color: #61DAFA;
    }
`

export {TodoSearch};