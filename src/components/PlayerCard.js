import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Player(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Total runs: {props.player.total_runs} 
        </Typography>
        <Typography variant="h5" component="h2">
          {props.player.batsman}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Average: {props.player.average}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Strikerate: {props.player.strikerate}
        </Typography>
      </CardContent>
    </Card>
  );
}
