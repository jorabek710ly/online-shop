import React from 'react'
import MainRouters from './pages/index'
import NetworkStatus from './components/network-status/NetworkStatus'

const App = () => {
  
  return (
    <div>
      <NetworkStatus/>
      <MainRouters/>
    </div>
  )
}

export default App