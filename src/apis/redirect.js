import * as urls from "./urls";

const apiBasePaths = [urls.ProgramApiUrl];

class RedirectUrls {
  static get apiBasePath() {
    return apiBasePaths;
  }

  static getUrlParts(url) {
    const indexOfApi = url.indexOf(this.apiBasePath.find(path => url.indexOf(path) !== -1));
    return {
      host: url.substring(0, indexOfApi),
      urlPath: url.substring(indexOfApi),
      isAPIRequest: indexOfApi !== -1
    };
  }

  static redirect(url) {
    let urlParts = this.getUrlParts(url);
    if (!urlParts.isAPIRequest) {
      return url;
    }
    return `${urlParts.host}/admin/proxy?url=${encodeURIComponent(urlParts.urlPath)}`;
  }
}

export default RedirectUrls;