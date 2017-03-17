import React, {PropTypes} from "react";
import Navigation from "./common/navigation";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;