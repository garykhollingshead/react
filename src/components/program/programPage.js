import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import ProgramList from "./programList";
import * as programsActions from "../../actions/programActions";

class ProgramsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.props.getPrograms("");
  }

  render() {
    const {programs} = this.props;

    return (
      <div>
        <h1>Programs</h1>
        <ProgramList programs={programs}/>
      </div>
    );
  }
}

ProgramsPage.propTypes = {
  programs: PropTypes.array.isRequired,
  getPrograms: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    programs: state.programs.programs
  };
}

function mapDispatchToProps(dispatch){
  return {
    getPrograms: bindActionCreators(programsActions.getPrograms, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgramsPage);