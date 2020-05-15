const osNotification = (title, body) => {
  if (!("Notification" in window)) return;

  const notification = new Notification(title, { body });
};

export default osNotification;
