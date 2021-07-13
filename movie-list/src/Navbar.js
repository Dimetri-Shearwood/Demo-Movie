import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div class="nav"><strong>What to watch</strong>
      <form action="">
        <div class="inputFields">
          <input type="search" placeholder="Title" />
          <label for="" class=""></label>
          <select name="Type" id="Type" class="type">
              <option value="movies">Movies</option>
              <option value="series">Series</option>
              <option value="episodes">Episodes</option>
          Type</select>
          <button>Search</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Navbar;
