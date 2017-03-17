import {notification} from "antd";

class Notification {
  static displaySuccess(message = "success", description = "") {
    notification["success"]({
      message,
      description
    });
  }

  static displayError(message = "error", description = "") {
    notification["error"]({
      message,
      description
    });
  }
}

export default Notification;