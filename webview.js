"use strict";

const path = require('path');

module.exports = Franz => {
  const getMessages = function getMessages() {
    const notifications = 0;
    const newUnreads = 0;

    const notificationElement = document.getElementsByClassName('yj-notifications-indicator-count');
    const newMessagesElement = document.getElementsByClassName("[yj-thread-list--new-message-text");

    if (notificationElement.length) {
      notifications = parseInt(notificationElement[0].innerHTML, 10);
    }

    if (newMessagesElement.length) {
      newUnreads = parseInt(newMessagesElement[0].innerHTML.match(/\d+/)[0], 10);
    }

    // First parameter is direct notifications, second parameter is indirect
    // notifications.
    Franz.setBadge(notifications, newUnreads);
  };

  Franz.loop(getMessages);
};
