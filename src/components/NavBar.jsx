/* eslint-disable react/prop-types */
// @ts-nocheck
const NavBar = () => {
  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-slate-600">
      <div className="flex flex-row items-center m-auto w-[1300px] p-3">
        <h1>Rick & Morty</h1>
        <div className="ml-auto">
          <input
            type="text"
            placeholder="Search..."
            className="py-1 pl-4 rounded-2xl focus:outline-none focus-visible:outline-offset-1 focus-visible:outline-1 focus-visible:outline-black"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
