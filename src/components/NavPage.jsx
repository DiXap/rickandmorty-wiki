/* eslint-disable react/prop-types */
// @ts-nocheck
import {
  RxChevronLeft,
  RxChevronRight,
  RxDoubleArrowLeft,
  RxDoubleArrowRight,
} from "react-icons/rx";

const NavPage = ({ pageInfo, page, setPage }) => {
  const handlePage = (numPage) => {
    return `${page.split("=")[0]}=${numPage}`;
  };
  return (
    <div className="flex flex-row justify-end items-center gap-1 mt-5">
      {pageInfo.prev && (
        <>
          <button className="text-2xl" onClick={() => setPage(handlePage(1))}>
            <RxDoubleArrowLeft />
          </button>
          <button className="text-2xl" onClick={() => setPage(pageInfo.prev)}>
            <RxChevronLeft />
          </button>
        </>
      )}
      {/* TODO: Considerar castear a int
       <p>Page {pageInfo.next.split('=')[1] - 1}</p> */}
      <p className="mx-2">{page.split("=")[1]}</p>
      {pageInfo.next && (
        <>
          <button
            className="text-2xl"
            onClick={() => {
              setPage(pageInfo.next);
            }}
          >
            <RxChevronRight />
            {/* <RxDoubleArrowRight /> */}
          </button>
          <button
            className="text-2xl"
            onClick={() => setPage(handlePage(pageInfo.pages))}
          >
            <RxDoubleArrowRight />
          </button>
        </>
      )}
    </div>
  );
};

export default NavPage;
