"use strict";

const path = require('path');

module.exports = Franz => {
  const getMessages = function getMessages() {
    const notifications = 0;
    const notificationElement = document.querySelector("span[data-qaid=notifications_unread_count_label]");

    if (notificationElement) {
      notifications = parseInt(notificationElement.innerHTML, 10);
    }

    Franz.setBadge(notifications);
  };

  Franz.loop(getMessages);
};
