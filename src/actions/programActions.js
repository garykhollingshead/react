import * as types from "./actionTypes";
import programApi from "../apis/programApi";

export function getProgramsSuccess(programs) {
  return {
    type: types.GET_PROGRAMS_SUCCESS,
    programs
  };
}

export function getProgramsFailure(error) {
  return {
    type: types.GET_PROGRAMS_FAILURE,
    error
  };
}

export function getProgramsRequest() {
  return {
    type: types.GET_PROGRAMS_REQUEST
  };
}

export function getPrograms(query) {
  return function(dispatch) {
    dispatch(getProgramsRequest());
    return programApi.getPrograms(query)
      .then(programs => {
        dispatch(getProgramsSuccess(programs));
      })
      .catch(error => {
        dispatch(getProgramsFailure(error.message));
      });
  };
}
