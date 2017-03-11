import fetch from "fetch";

class ProgramApi {
  static getPrograms(query) {
    let encodedQuery = encodeURIComponent(query || "");
    return fetch(`${ProgramApiUrl}?query=${encodedQuery}`, {method: 'GET'})
      .then(response => response.json());
  }
}

export default ProgramApi;