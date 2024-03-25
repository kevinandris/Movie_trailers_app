import Navbar from "@components/Navbar";
import SearchResults from "@components/SearchResults";
import React from "react";

const SearchPage = ({ params }: { params: { query: string } }) => {
  const query = params.query;
  return (
    <div>
      <Navbar />
      <SearchResults query={query} />
    </div>
  );
};

export default SearchPage;
