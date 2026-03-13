"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const InputSearch = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputSearch = (e) => {
    e.preventDefault();
    // if (!searchTerm.trim()) return;

    router.push(`/foods?search=${encodeURIComponent(searchTerm.trim())}`);
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleInputSearch} className="flex items-center gap-2">
      <input
        type="text"
        name="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter Food Name"
        className="border-2 p-1 rounded"
      />
      <button className="bg-indigo-500 text-white font-bold p-2 rounded-2xl">
        Search
      </button>
    </form>
  );
};

export default InputSearch;
