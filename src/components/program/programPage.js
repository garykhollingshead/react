import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as programsActions from "../../actions/programActions";

class ProgramsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.props.getPrograms("");
  }

  render() {
    return (
      <div>
        <h1>Programs</h1>
      </div>
    );
  }
}

ProgramsPage.propTypes = {
  programs: PropTypes.array.isRequired,
  actions: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    programs: state.programs
  };
}

function mapDispatchToProps(dispatch){
  return {
    getPrograms: bindActionCreators(programsActions.getPrograms, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgramsPage);