/* eslint-disable react/prop-types */
// @ts-nocheck
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CharactersContext = createContext();
const apiUrl = "https://rickandmortyapi.com/api/character/?page=1";

export const ContextProvider = (props) => {
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [lastPage, setLastPage] = useState(0);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const gotoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    gotoTop();
    const fetchData = async () => {
      const url = page === "" ? apiUrl : page;
      try {
        const { data } = await axios.get(url);
        // const response = await fetch(url);
        // const data = await response.json();

        setCharacters(data.results);
        setNextPage(data.info.next);
        setPrevPage(data.info.prev);
        setLastPage(data.info.pages);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(true);
        setError(true);
      }
    };

    fetchData();
  }, [page, query]);

  const makeQuery = (q) => {
    console.log("passing");
    setQuery(q);
    setPage(`${apiUrl}&name=${q}`);
  };

  const gotoPage = (num) => {
    const dummy = prevPage ? prevPage : nextPage;
    setPage(dummy.replace(/page=\d+/, `page=${num}`));
  };

  return (
    <CharactersContext.Provider
      value={{
        characters,
        loading,
        error,
        page,
        nextPage,
        prevPage,
        lastPage,
        query,
        setPage,
        gotoTop,
        gotoPage,
        makeQuery,
      }}
    >
      {props.children}
    </CharactersContext.Provider>
  );
};
