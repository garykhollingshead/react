import * as urls from "./urls";
import RedirectUrls from "./redirect";

class ProgramApi {

  static getPrograms(query) {
    let encodedQuery = encodeURIComponent(query || "");
    return fetch(RedirectUrls.redirect(`${urls.ProgramApiUrl}/programs?query=${encodedQuery}`), {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: "include"
    })
      .then(response => response.json());
  }
}

export default ProgramApi;