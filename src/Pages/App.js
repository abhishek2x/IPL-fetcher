import React from 'react'
import ResponsiveDrawer from '../components/ResponsiveDrawer'
import { TabContextProvider } from '../Context/TabContext'

function App() {
  return (
    <TabContextProvider>
      <ResponsiveDrawer />
    </TabContextProvider>
  )
}

export default App
