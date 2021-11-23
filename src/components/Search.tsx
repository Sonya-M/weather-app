import React, { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { formatQueryForRouter } from "../utils/formatters";
import styled from "styled-components";

const SearchForm = styled.form`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & input {
    margin: 0;
    outline: none;
    border: none;
    border-radius: 0.3rem;
    font-size: 1rem;
    padding: 0.6rem 1rem;
    box-shadow: 0 0 2px 2px rgba(12, 107, 145, 0.2);
  }
  & input:hover,
  & input:focus,
  & input:active {
    box-shadow: 0 0 2px 2px rgba(12, 107, 145, 0.4);
  }
`;

const Search: React.FC = (props) => {
  const searchRef = useRef<HTMLInputElement>(null);
  let setSearchParams = useSearchParams()[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchRef.current!.value;
    if (query.trim().length === 0) {
      return;
    }
    setSearchParams({ q: formatQueryForRouter(query) });
    searchRef.current!.value = "";
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <input type="search" placeholder="Search" ref={searchRef} />
    </SearchForm>
  );
};

export default Search;
