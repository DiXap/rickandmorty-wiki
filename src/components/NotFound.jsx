/* eslint-disable react/prop-types */
// @ts-nocheck
// import React from 'react'
import ImgNotFound from "../assets/not-found.jpeg";

const NotFound = () => {
  return (
    <div className="p-5 my-auto block">
      <figure className="mt-4">
        <img src={ImgNotFound} alt="404" className="mx-auto rounded-lg" />
        <figcaption className="text-center mt-2">Loading...</figcaption>
      </figure>
    </div>
  );
};

export default NotFound;
