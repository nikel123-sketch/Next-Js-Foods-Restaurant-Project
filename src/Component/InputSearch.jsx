"use client";
import React from "react";

const InputSearch = () => {
  const hendleInputSearch = (e) => {
    e.preventDefault();

    const Value = e.target.Search.value;
    console.log(Value);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={hendleInputSearch}>
        <input
          name="Search"
          className="border-2 p-1 mx-4"
          type="text"
          placeholder="Enter Food Name"
        />

        <button className="bg-indigo-500 font-bold p-2 rounded-2xl">
          Search
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
