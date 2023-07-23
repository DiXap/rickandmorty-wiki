/* eslint-disable react/prop-types */
// @ts-nocheck

import { createContext, useEffect, useState } from "react";

export const CharactersContext = createContext();

export const ContextProvider = (props) => {
  const [apiUrl, setApiUrl] = useState(
    "https://rickandmortyapi.com/api/character/?page=1"
    // "https://rickandmortyapi.com/api/character/?name=rick&page=2"
  );
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [lastPage, setLastPage] = useState(0);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState("");

  //   const fetchData = async (url) => {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     return data;
  //   };

  useEffect(() => {
    const fetchData = async () => {
    //   let response;
    //   if (page === "") {
    //     response = await fetch(apiUrl);
    //   } else {
    //     response = await fetch(page)
    //   }
       const url = page === "" ? apiUrl : page

      //   if (apiUrl.includes("name")) {
      //     // console.log('fetching');
      //     let dummy = apiUrl.replace(/name=\w+/, `name=${query}`)
      //     response = await fetch(
      //         dummy
      //     );
      //   } else {
      //     console.log('fetching');
      //     let dummy = apiUrl.replace(/page=\d+/, `page=1`)
      //     response = await fetch(`${apiUrl}&name=${query}`);
      //     // response = await fetch(`${apiUrl}`);
      //   }
      //   const response = await fetch(`${apiUrl}`);

      const response = await fetch(url)
      const data = await response.json();

      setCharacters(data.results);
      setNextPage(data.info.next);
      setPrevPage(data.info.prev);
      setLastPage(data.info.pages);
    };

    fetchData();
  }, [page, query]);

  const makeQuery = (q) => {
    //    const normalizedUrl =
    console.log("passing");
    // if (apiUrl.includes("name")) {
    //   setPage(apiUrl.replace(/name=\w+/, `name=${q}`));
    //   console.log("changging");
    // } else {
    //   setPage(`${apiUrl}&name=${query}`);
    // }
    setQuery(q)
    setPage(`${apiUrl}&name=${q}`)
  };

  const gotoLastPage = (num) => {
    const dummy = prevPage ? prevPage : nextPage;
    setPage(dummy.replace(/page=\d+/, `page=${num}`));
  };

  //   const gotoFirstPage = () => {
  //     const dummy = prevPage ? prevPage : nextPage
  //     setApiUrl(dummy.replace(/page=\d+/, `page=1`))
  //   }

  return (
    <CharactersContext.Provider
      value={{
        characters,
        nextPage,
        prevPage,
        lastPage,
        query,
        setPage,
        gotoLastPage,
        makeQuery,
        setQuery,
        setApiUrl,
      }}
    >
      {props.children}
    </CharactersContext.Provider>
  );
};
