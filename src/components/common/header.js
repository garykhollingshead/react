import React from "react";
import {Link, IndexLink} from "react-router";

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/programs" activeClassName="active">Programs</Link>
    </nav>
  );
};

export default Header;