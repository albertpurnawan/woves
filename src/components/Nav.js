import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import Logout from "./Logout";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  return (
    <nav>
      <h1>Woves</h1>
      <button
        data-testid="libraryBtn"
        onClick={() => setLibraryStatus(!libraryStatus)}
      >
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
      <Logout />
    </nav>
  );
};

export default Nav;
