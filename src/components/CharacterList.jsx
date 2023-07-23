/* eslint-disable react/prop-types */
// @ts-nocheck
import { useContext } from "react";
import CharacterCard from "./CharacterCard";
import NavPage from "./NavPage";
// Context
import { CharactersContext } from "../context/Context";
import NotFound from "./NotFound";

const CharacterList = () => {
  const { characters, loading } = useContext(CharactersContext);

  return (
    <div className="max-w-[1200px] mx-auto mt-16">
      { loading ? (
        <NotFound />
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
