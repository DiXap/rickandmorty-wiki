/* eslint-disable react/prop-types */
// @ts-nocheck

import { createContext, useEffect, useState } from "react";

export const characters = createContext();

export const ContextProvider = (props) => {
  const [characters, setCharacters] = useState([]);
  const [apiUrl, setApiUrl] = useState("https://rickandmortyapi.com/api/character/")
  const [nextPage, setNextPage] = useState(null)
  const [prevPage, setPrevPage] = useState(null)
  const [query, setQuery] = useState("")

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();

      setCharacters(data.results)
      setNextPage(data.info.next)
      setPrevPage(data.info.prev)
    }

    fetch();
  }, [apiUrl]);

  const makeQuery = () => {
    setApiUrl(`${apiUrl}?name=${query}`)
  }
};
