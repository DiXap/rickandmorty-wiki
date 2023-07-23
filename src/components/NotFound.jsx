/* eslint-disable react/prop-types */
// @ts-nocheck
// import React from 'react'
import ImgNotFound from "../assets/not-found.jpeg";

const NotFound = ({ error }) => {
  return (
    <div className="p-5 my-auto block">
      <figure className="mt-4">
        <img src={ImgNotFound} alt="404" className="mx-auto rounded-lg" />
        <figcaption className="text-center mt-2 text-xl text-gray-600">
          {error ? "Not found" : "Loading..."}
        </figcaption>
      </figure>
    </div>
  );
};

export default NotFound;
