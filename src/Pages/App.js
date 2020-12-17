import React from 'react'
import MainFrame from '../components/MainFrame'
// import { FilterClickContextProvider } from '../Context/FilterClick'
import { TabContextProvider } from '../Context/TabContext'
import { TeamContextProvider } from '../Context/TeamContext'
import { YearContextProvider } from '../Context/YearContext'

function App() {
  return (
    // <FilterClickContextProvider>
      <TabContextProvider>
        <YearContextProvider>
          <TeamContextProvider>
            <MainFrame />
          </TeamContextProvider>
        </YearContextProvider>
      </TabContextProvider>
    // </FilterClickContextProvider>
  )
}

export default App
