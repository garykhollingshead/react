import * as urls from "./urls";

class ProgramApi {

  static getPrograms(query) {
    let encodedQuery = encodeURIComponent(query || "");
    return fetch(`${urls.ProgramApiUrl}/programs?query=${encodedQuery}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer ycB3hik2P-OLuPHmAD365Q_8TCaYq7gGZdxRcjodRGlxSjYlZhOEOwMxykBsBnxGQHoWFtw8V5DlKbgYtiRTRtyKC8HuOK-Kcw5YDgOMyxfUAiHla8nNrVbEvOuIQ0b-zstXxUf-T3bqaPP2pCp0wJx02Ra_IYKIte7WOFxLCSYkNMJfN0CdmwHEOM8X-RjoDWFUm0sj-s7biKXKEbdZrnGyk5qYklZMO27CIhr99fbLmeIGsro5qXIe4clSUawdh1wAJ9XxzxtKFr9slxEP9CuK9ZHDC6lQY1Ivc5AR8uEzyxWDrixxKgjt9wylvwi9J1PAyeGmjwb8Y5UY86a_XPy6T73dmLuiFqKv3n5yczE"
      }
    })
      .then(response => response.json());
  }
}

export default ProgramApi;