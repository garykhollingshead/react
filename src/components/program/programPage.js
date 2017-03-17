import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import ProgramList from "./programList";
import * as programsActions from "../../actions/programActions";
import AddProgramModal from "../addProgram/addProgramModal";

class ProgramsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      childText: "start"
    };

    this.props.getPrograms("");

    this.handleProgramNameChange = this.handleProgramNameChange.bind(this);
  }

  handleProgramNameChange(newName) {
    this.setState({childText:newName});
  }

  render() {
    const {programs} = this.props;
    const {isProgramsLoading} = this.props;

    return (
      <div>
        <h1>Programs</h1>
        <AddProgramModal handleChange={this.handleProgramNameChange} />
        <p>{this.state.childText}</p>
        <ProgramList programs={programs} isProgramsLoading={isProgramsLoading}/>
      </div>
    );
  }
}

ProgramsPage.propTypes = {
  programs: PropTypes.array.isRequired,
  getPrograms: PropTypes.func.isRequired,
  isProgramsLoading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    programs: state.programs.programs,
    isProgramsLoading: state.programs.isLoading
  };
}

function mapDispatchToProps(dispatch){
  return {
    getPrograms: bindActionCreators(programsActions.getPrograms, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgramsPage);