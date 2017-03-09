import React from "react";
import {Link} from "react-router";

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Home Page {ProgramApiUrl}</h1>
        <Link to="rad2/about" className="btn btn-primary btn-group-lg">
          About
        </Link>
      </div>
    );
  }
}

export default HomePage;