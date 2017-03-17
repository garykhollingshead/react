import * as urls from "./urls";
import Notification from "../components/common/notification";
import RedirectUrls from "./redirect";

function handleErrors(response) {
  if (!response.ok) {
    Notification.displayError("Failed to load Programs", response.statusText);
    throw Error(`${response.status}: ${response.statusText}`);
  }
  return response;
}

class ProgramApi {
  static getPrograms(query) {
    let encodedQuery = encodeURIComponent(query || "");
    return fetch(RedirectUrls.redirect(`${urls.ProgramApiUrl}/programs?query=${encodedQuery}`), {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(handleErrors)
      .then(response => response.json());
  }
}

export default ProgramApi;