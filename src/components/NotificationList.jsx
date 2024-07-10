
function NotificationList({ notifications, clearNotification }) {
  return (
    <div className="notification-list">
      {notifications.map(notification => (
        <div key={notification.id} className="notification">
          <h2>{notification.name}</h2>
          <p>{notification.message}</p>
          <button onClick={() => clearNotification(notification.id)}>Clear</button>
        </div>
      ))}
    </div>
  );
}

export default NotificationList;
