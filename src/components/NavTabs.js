import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Suspense, lazy } from 'react';
import { TabContext } from '../Context/TabContext';
import { CircularProgress } from '@material-ui/core';
// import Matches from '../utils/Matches';
// import Player from '../utils/Player';
const Matches = lazy(() => import('../utils/Matches'));
const Player = lazy(() => import('../utils/Player'));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 70,
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = useContext(TabContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="Tabs for Options"
        >
          <LinkTab label="MATCHES" />
          <LinkTab label="PLAYER" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Suspense fallback={<CircularProgress disableShrink />}>
          <Matches />
        </Suspense>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Suspense fallback={<CircularProgress disableShrink />}>
          <Player />
        </Suspense>
      </TabPanel>
    </div>
  );
}
