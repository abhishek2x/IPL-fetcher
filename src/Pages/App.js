import React, { useState } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MainFrame from '../components/MainFrame'
import { QueryContextProvider } from '../Context/QueryContext'
import { TabContextProvider } from '../Context/TabContext'
import { TeamContextProvider } from '../Context/TeamContext'
import { YearContextProvider } from '../Context/YearContext'
import Switch from '@material-ui/core/Switch';

function App() {
  const [DarkMode, setDarkMode] = useState(true);
  
  const theme = createMuiTheme({
    palette: {
      type: DarkMode ? 'dark' : 'light'
    }
  })

  const switchComp = (
    <Switch
      checked={DarkMode}
      onChange={() => setDarkMode(!DarkMode)}
    />
  )

  return (
    <ThemeProvider theme={theme}>
      {/* <Paper> */}
      <QueryContextProvider>
        <TabContextProvider>
          <YearContextProvider>
            <TeamContextProvider>
              <MainFrame switchComp={switchComp}/>
            </TeamContextProvider>
          </YearContextProvider>
        </TabContextProvider>
      </QueryContextProvider>
      {/* </Paper> */}
    </ThemeProvider>
  )
}

export default App
