"use strict";

module.exports = Franz => {
  const getMessages = function getMessages() {
    let directMessages = 0;
    let indirectMessages = 0;

    const unreadElement = document.getElementsByClassName("unread-count");
    const notificationElement = document.getElementsByClassName("yj-notifications-indicator-count");
    const newMessagesElement = document.getElementsByClassName("yj-thread-list--new-message-text");

    if (notificationElement.length) {
      directMessages = parseInt(notificationElement[0].innerHTML, 10);
    }

    if (unreadElement.length) {
      //directMessages = parseInt(unreadElement[0].innerHTML, 10);
    }

    if (newMessagesElement.length) {
      indirectMessages = parseInt(newMessagesElement[0].innerHTML.match(/\d+/)[0], 10);
    }

    Franz.setBadge(directMessages, indirectMessages);
  };

  Franz.loop(getMessages);
};
