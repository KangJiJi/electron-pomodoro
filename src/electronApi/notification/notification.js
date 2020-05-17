import icon from "../../assets/images/icon";

const osNotification = (title, body) => {
  if (!("Notification" in window)) return;

  new Notification(title, {
    body,
    icon: icon.electronTomato,
  });
};

export default osNotification;
