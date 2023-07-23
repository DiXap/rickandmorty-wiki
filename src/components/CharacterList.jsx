/* eslint-disable react/prop-types */
// @ts-nocheck
import { useContext } from "react";
import CharacterCard from "./CharacterCard";
import NavPage from "./NavPage";
// Context
import { CharactersContext } from "../context/Context";

const CharacterList = () => {
  const { characters } = useContext(CharactersContext)
//   const [characters, setCharacters] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [pageInfo, setPageInfo] = useState({});
//   const [page, setPage] = useState(
//     "https://rickandmortyapi.com/api/character/?page=1" // /?page=
//   );

//   useEffect(() => {
//     const fetchData = async () => {
//       //   const response = await fetch(
//       //     `https://rickandmortyapi.com/api/character/?page=${page}`
//       //   );
//       const response = await fetch(page);
//       const data = await response.json();
//       console.log(data);

//       setCharacters(data.results);
//       setPageInfo(data.info);
//       setLoading(false);
//     };

//     fetchData();
//   }, [page]);

  return (
    <div className="max-w-[1200px] mx-auto mt-16">
      {characters.lenght === 0 ? (
        <h1>Loading</h1>
      ) : (
        <>
          <NavPage />
          <div className="grid grid-cols-2 gap-2 px-4 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">
            {characters.map((character) => {
              return <CharacterCard key={character.id} character={character} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default CharacterList;
