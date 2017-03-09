import React, {PropTypes} from "react";
import {Link, IndexLink} from "react-router";

const Header = () => {
  return (
    <nav>
      <IndexLink to="/rad2" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/rad2/about" activeClassName="active">About</Link>
    </nav>
  );
};

export default Header;