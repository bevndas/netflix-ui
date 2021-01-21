import React, { useEffect, useState } from "react";
import "./Notification.css";

function NotificationMessage({ message, type }) {
  const [showMessage, setshowMessage] = useState(false);
  useEffect(() => {
    if (message) {
      setshowMessage(true);
      setTimeout(() => {
        setshowMessage(false);
      }, 3000);
    } else {
      setshowMessage(false);
    }
  }, [message]);
  return (
    <div>
      {showMessage && (
        <div className={`message__body ${type}`}>
          <p className="message">{message}</p>
        </div>
      )}
    </div>
  );
}

export default NotificationMessage;
