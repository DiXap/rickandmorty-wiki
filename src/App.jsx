// @ts-nocheck
import CharacterList from "./components/CharacterList";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="font-poppins mb-3 max-w-[1240px]">
      <NavBar />
      <CharacterList />
    </div>
  );
};

export default App;
