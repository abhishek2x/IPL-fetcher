import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

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

export default function OutlinedCard() {
  const classes = useStyles();
  const bullet = <span className={classes.bullet}>•</span>;

  return (
    <Paper>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
        </Typography>
          <Typography variant="h5" component="h2">
            Title
        </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
          <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
}
