import * as types from "./types";
import programApi from "../apis/programApi";

export function getProgramsSuccess(programs) {
  return {
    type: types.GET_PROGRAMS_SUCCESS,
    programs
  };
}

export function getPrograms(query) {
  return function(dispatch) {
    return programApi.getPrograms(query)
      .then(programs => {
        dispatch(getProgramsSuccess(programs))
      })
      .catch(error => {
        throw(error);
      });
  };
}
