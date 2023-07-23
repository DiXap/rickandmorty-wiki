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
  const {prevPage, nextPage, lastPage, gotoLastPage, setApiUrl, setPage} = useContext(CharactersContext)

//   const handlePage = (numPage) => {
//     return `${page.split("=")[0]}=${numPage}`;
//   };

  return (
    <div className="flex flex-row justify-end items-center gap-1 mt-5">
      {prevPage && (
        <>
          <button className="text-2xl" onClick={() => gotoLastPage(1)}>
            <RxDoubleArrowLeft />
          </button>
          <button className="text-2xl" onClick={() => setPage(prevPage)}>
            <RxChevronLeft />
          </button>
        </>
      )}
      {/* TODO: Considerar castear a int
       <p>Page {pageInfo.next.split('=')[1] - 1}</p> */}
      {/* <p className="mx-2">{page.split("=")[1]}</p> */}
      {nextPage && (
        <>
          <button
            className="text-2xl"
            onClick={() => {
              setPage(nextPage);
            }}
          >
            <RxChevronRight />
            {/* <RxDoubleArrowRight /> */}
          </button>
          <button
            className="text-2xl"
            onClick={() => gotoLastPage(lastPage)}
          >
            <RxDoubleArrowRight />
          </button>
        </>
      )}
    </div>
  );
};

export default NavPage;
