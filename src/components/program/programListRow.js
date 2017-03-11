import React, {PropTypes} from "react";

const ProgramListRow = ({program}) => {
  return (
    <tr>
      <td>{program.id}</td>
      <td>{program.name}</td>
      <td>{program.email}</td>
    </tr>
  );
};

ProgramListRow.propTypes = {
  program: PropTypes.object.isRequired
};

export default ProgramListRow;