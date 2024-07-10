
import NotificationWrapper from "./NotificationWrapper";

function NotificationList({ notifications, clearNotification }) {
  return (
    <NotificationWrapper>
      {notifications.map(notification => (
        <div key={notification.id} className="notification">
          <h2>{notification.name}</h2>
          <p>{notification.message}</p>
          <button onClick={() => clearNotification(notification.id)}>Clear</button>
        </div>
      ))}
    </NotificationWrapper>
  );
}

export default NotificationList;
