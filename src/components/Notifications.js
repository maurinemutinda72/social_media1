import React from "react";

const Notifications = () => {
  const notifications = [
    { id: 1, message: "You have a new message!" },
    { id: 2, message: "Your profile was viewed 3 times today." },
  ];

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
