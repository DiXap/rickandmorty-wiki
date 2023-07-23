/* eslint-disable react/prop-types */
// @ts-nocheck
import { useEffect, useState } from "react";
import CharacterInfo from "./CharacterInfo";

const CharacterCard = ({ character }) => {
  // TODO: Decidir si es mejor usar useReducer
  const [statusColor, setStatusColor] = useState("white");

  useEffect(() => {
    const color = { Alive: "green", Dead: "red", unknown: "grey" };
    setStatusColor(color[character.status])
  }, [character])

  return (
    // <div className="ring-1 my-3 p-2 rounded-lg max-w-[230px] overflow-hidden">
    <div className="bg-slate-800 my-3 p-2 rounded-lg max-w-[230px] overflow-hidden">
      <div className="rounded-lg overflow-hidden relative">
        <img
          src={character.image}
          alt={character.name}
          className="object-fill"
        />
        {/* <div className="flex justify-start absolute top-0 left-0 right-0 bottom-0 ml-2 mt-1"> */}
        <div
          className="flex justify-start absolute top-0 left-0 ml-1 mt-1 p-1 rounded-md"
          style={{ backgroundColor: `${statusColor}` }}
        >
          <p className="text-xs text-white font-semibold">{character.status}</p>
        </div>
      </div>
      <CharacterInfo character={character} />
    </div>
  );
};

export default CharacterCard;
