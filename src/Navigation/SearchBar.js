import React from "react";

function SearchBar() {
  return (
    <div className="SearchBar">
      <div className="ctr">
        {/* <ul className="tabs" style={{ listStyle: "none" }}> */}
        {/* <li> */}
        <div>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        {/* </li> */}
        {/* <li> */}
        <div>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
          {/* </li> */}
          {/* </ul> */}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
