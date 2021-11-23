import React, { useRef } from "react";
import styled from "styled-components";

const SearchForm = styled.form`
  margin: auto;

  & input {
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
  @media screen and (min-width: 900px) {
    grid-column: span 2;
  }
`;

const SearchBar: React.FC<{ onSearch: (q: string) => void }> = (props) => {
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchRef.current!.value;
    if (query.trim().length === 0) {
      return;
    }
    props.onSearch(query);
    // searchRef.current!.value = "";
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <input type="search" placeholder="Search" ref={searchRef} />
    </SearchForm>
  );
};

export default SearchBar;
