import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div class="nav">What to watch</div>
      <form action="">
        <div class="inputFields">
          <input type="search" placeholder="Title" />
          <label for="" class=""></label>
          <select name="Type" id="" class="type">Type
              <option value="Type"></option>
              <option value="movies">Movies</option>
              <option value="series">Series</option>
              <option value="episodes">Episodes</option>
          Type</select>
          <button></button>
        </div>
      </form>
    </div>
  );
}

export default Navbar;
