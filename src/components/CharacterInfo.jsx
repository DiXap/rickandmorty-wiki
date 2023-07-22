/* eslint-disable react/prop-types */
// @ts-nocheck
const CharacterInfo = ({ character }) => {
  //   const statusIcon = { Alive: "a", Dead: "d", unknown: "u" };

  return (
    <section className="p-2 text-white">
      <h2 className="text-2xl font-semibold mb-2">{character.name}</h2>
      {/* <p>{`${statusIcon[character.status]} - ${character.species}`}</p> */}
      {/* <p className="text-sm">Species:</p> */}
      <p className="">{character.species}</p>
      <div className="my-3">
        <p className="text-sm text-slate-400">Origin:</p>
        <p className="">{character.origin.name}</p>
      </div>
      <div>
        <p className="text-sm text-slate-400">Last known location:</p>
        <p>{character.location.name}</p>
      </div>
    </section>
  );
};

export default CharacterInfo;
