import React from "react";

const LatestCollection = (props) => {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="products-section-heading mb-6 text-3xl text-black-900 text-center">
            <hr />
            {props.pageTitle}
            <hr />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;
