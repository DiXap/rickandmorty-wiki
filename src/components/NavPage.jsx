/* eslint-disable react/prop-types */
// @ts-nocheck
import { useContext } from "react";
import {
  RxChevronLeft,
  RxChevronRight,
  RxDoubleArrowLeft,
  RxDoubleArrowRight,
} from "react-icons/rx";

import { CharactersContext } from "../context/Context";

const NavPage = () => {
  const { page, prevPage, nextPage, lastPage, gotoPage, setPage } =
    useContext(CharactersContext);

  return (
    <div className="flex flex-row justify-end items-center gap-1 mt-5 pr-3">
      {prevPage && (
        <>
          <button className="text-2xl" onClick={() => gotoPage(1)}>
            <RxDoubleArrowLeft />
          </button>
          <button className="text-2xl" onClick={() => setPage(prevPage)}>
            <RxChevronLeft />
          </button>
        </>
      )}
      <p>{page ? page.match(/(\d+)/)[0] : "1"}</p>
      {nextPage && (
        <>
          <button
            className="text-2xl"
            onClick={() => {
              setPage(nextPage);
            }}
          >
            <RxChevronRight />
          </button>
          <button className="text-2xl" onClick={() => gotoPage(lastPage)}>
            <RxDoubleArrowRight />
          </button>
        </>
      )}
    </div>
  );
};

export default NavPage;
