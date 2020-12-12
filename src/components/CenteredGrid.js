import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DisabledTabs from './DisabledTabs';
import Sidebar from './Sidebar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 20, 
    height: 20
  },
  paper: {
    padding: theme.spacing(2),
    magin: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-evenly',
    border: '1px solid black'
  },
  sidebar: {
    border: '1px solid black'
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2} className={classes.sidebar}>
          <Paper className={classes.paper}>
            <Sidebar />
          </Paper>
        </Grid>
        <Grid item xs={10} className={classes.buttons}>
          <Paper className={classes.paper} >
            <DisabledTabs />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
