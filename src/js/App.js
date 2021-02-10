import React from 'react'

const App = () => {
    return (
        <>
            <h1>App component from React</h1>
            <button onClick={() => electron.notificationApi.sendNotification('My custom notification!')}>Notify</button>
        </>
    )
}

export default App
