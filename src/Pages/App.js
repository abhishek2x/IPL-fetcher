import React from 'react'
import MainFrame from '../components/MainFrame'
import { QueryContextProvider } from '../Context/QueryContext'
import { TabContextProvider } from '../Context/TabContext'
import { TeamContextProvider } from '../Context/TeamContext'
import { YearContextProvider } from '../Context/YearContext'

function App() {
  return (
    <QueryContextProvider>
      <TabContextProvider>
        <YearContextProvider>
          <TeamContextProvider>
            <MainFrame />
          </TeamContextProvider>
        </YearContextProvider>
      </TabContextProvider>
    </QueryContextProvider>
  )
}

export default App
