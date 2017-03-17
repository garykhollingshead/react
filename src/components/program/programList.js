import React, {PropTypes} from "react";
import ProgramListRow from "./programListRow";
import Loading from "../common/loading";

const ProgramList = ({programs, isProgramsLoading}) => {
  if (isProgramsLoading) {
    return <Loading interval={300} dots={3}/>
  }
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Program Id</th>
        <th>Program Name</th>
        <th>Contact Email</th>
      </tr>
      </thead>
      <tbody>
      {programs.map(program =>
        <ProgramListRow key={program.id} program={program}/>
      )}
      </tbody>
    </table>
  );
};

ProgramList.propTypes = {
  programs: PropTypes.array.isRequired,
  isProgramsLoading: PropTypes.bool.isRequired
};

export default ProgramList;