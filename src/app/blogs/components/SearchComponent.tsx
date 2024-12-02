"use client";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

const SearchComponent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value.trim();
    setQuery(e.target.value);
    const params = new URLSearchParams(searchParams.toString());
    if (newQuery !== "") {
      params.set("query", newQuery); // Add or update the query parameter
    } else {
      params.delete("query"); // Remove the query parameter if empty
    }

    router.push(`?${params.toString()}`);
  };
  return (
    <div className="relative flex items-center w-full lg:w-1/2 mb-5">
      <input
        type="text"
        className="w-full py-2 pl-10 pr-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search by title or author"
        onChange={(e) => handleChange(e)}
        value={query}
      />
      <FaSearch className="absolute left-3 text-gray-500" size={20} />
    </div>
  );
};

export default SearchComponent;
