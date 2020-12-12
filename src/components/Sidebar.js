import React from 'react';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  button: {
    borderBottom: '2px solid #3F51B5',
    color: '#3F51B5',
    fontWeight: 'bolder'
  }
}));


export default function Sidebar() {
  const classes = useStyles();

  return (
    <Tab label="Facet Filters" className={classes.button}/>
  );
}
