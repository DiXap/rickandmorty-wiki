/* eslint-disable react/prop-types */
// @ts-nocheck
import { useContext, useState, useEffect, useRef } from "react";
import { CharactersContext } from "../context/Context";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import AppIcon from '../assets/not-found.jpeg'

const NavBar = () => {
  const { makeQuery, query } = useContext(CharactersContext);
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");

  const ref = useRef(null);

  const handleNav = () => {
    setNav(!nav);
    ref.current.focus();
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
      } else {
        setColor("transparent");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300 shadow-outline"
      style={{ background: `${color}` }}
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-3">
        <div className="mr-auto flex items-center gap-2">
            <img src={AppIcon} alt="" className="flex-initial rounded-full max-h-[30px]" />
          <h1 className="text-2xl font-bold">Rick & Morty</h1>
        </div>
        <div className="hidden sm:flex ml-auto">
          <input
            type="text"
            placeholder="Search..."
            className="py-1 pl-4 rounded-2xl shadow-border focus:outline-none focus-visible:outline-offset-1 focus-visible:outline-1 focus-visible:outline-gray-400"
            onChange={(event) => {
              makeQuery(event.target.value);
            }}
            value={query}
          />
        </div>
        <div className="block sm:hidden z-10" onClick={handleNav}>
          {/* {nav ? <AiOutlineClose size={20} /> : <AiOutlineSearch size={20} />} */}
          {nav || <AiOutlineSearch size={25} />}
        </div>
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-between items-center gap-4 w-full bg-black/40 ease-in duration-300"
              : "sm:hidden absolute top-0 right-0 bottom-0 left-[-100%] flex justify-between items-center gap-4 w-full bg-black/40 ease-in duration-300"
          }
        >
          <div className="ml-auto flex-initial">
            <input
              type="text"
              placeholder="Search..."
              ref={ref}
              className="flex-initial py-1 pl-4 rounded-2xl focus:outline-none focus-visible:outline-offset-1 focus-visible:outline-1 focus-visible:outline-black max-w-[250px]"
              onChange={(event) => {
                makeQuery(event.target.value);
              }}
              value={query}
            />
          </div>
          <div
            className="mx-auto text-gray-700 flex-none pl-3"
            onClick={handleNav}
          >
            <AiOutlineClose size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
