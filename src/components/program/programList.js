import React, {PropTypes} from "react";
import ProgramListRow from "./programListRow";

const ProgramList = ({programs}) => {
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
  program: PropTypes.array.isRequired
};

export default ProgramList;