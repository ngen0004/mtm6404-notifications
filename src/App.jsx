import { useState } from 'react'
import NotificationList from './components/NotificationList'
import notificationsData from './notifications.js'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [notifications, setNotifications] = useState(notificationsData)

  function clearNotification(id) {
    setNotifications(notifications.filter(notification => notification.id !== id))
  }

  function clearAllNotifications() {
    setNotifications([])
  }

  return (
    <div className="App">
      <header>
        <h1>Notifications</h1>
        <p>You have <b> {notifications.length} </b> Notifications</p>
        <button onClick={clearAllNotifications}>Clear All</button>
      </header>
      <NotificationList notifications={notifications} clearNotification={clearNotification} />
    </div>
  )
}

export default App
