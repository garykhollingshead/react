import fetch from "fetch";
import * as urls from "./urls";

class ProgramApi {

  static getPrograms(query) {
    let encodedQuery = encodeURIComponent(query || "");
    return fetch(`${urls.ProgramApiUrl}?query=${encodedQuery}`, {method: "GET"})
      .then(response => response.json());
  }
}

export default ProgramApi;