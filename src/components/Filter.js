import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import TeamData from "../Data/teams.json"
import YearData from "../Data/years.json"
import { TeamContext } from '../Context/TeamContext';
import { YearContext } from '../Context/YearContext';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
  },
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  list: {
    width: 200,
    height: 230,
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
}));

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

export default function Filter() {
  const classes = useStyles();

  const [team_checked, setTeamChecked] = React.useContext(TeamContext);
  const [teams] = React.useState(TeamData);

  const [year_checked, setYearChecked] = React.useContext(YearContext);
  const [years] = React.useState(YearData);

  const handleToggle = (value, element) => () => {
    let para = [];
    let set = [];
    if (element === "team") {
      para = team_checked
      set = setTeamChecked
    } else if (element === "year") {
      set = setYearChecked
      para = year_checked
    }

    const currentIndex = para.indexOf(value);
    const newChecked = [...para];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    set(newChecked);
  };

  const numberOfChecked = (items, element) => {
    if (element === "team") {
      return intersection(team_checked, items).length;
    } else if (element === "year") {
      return intersection(year_checked, items).length;
    }
  }

  const handleToggleAll = (items, element) => () => {
    if (element === "team") {
      if (team_checked.length === items.length) {
        setTeamChecked(not(team_checked, items));
      } else {
        setTeamChecked(union(team_checked, items));
      }
    } else if (element === "year") {
      if (year_checked.length === items.length) {
        setYearChecked(not(year_checked, items));
      } else {
        setYearChecked(union(year_checked, items));
      }
    }
  };

  const customList = (title, items, checked, element) => (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items, element)}
            checked={numberOfChecked(items, element) === items.length && items.length !== 0}
            indeterminate={numberOfChecked(items, element) !== items.length && numberOfChecked(items, element) !== 0}
            disabled={items.length === 0}
            inputProps={{ 'aria-label': 'all items selected' }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items, element)}/${items.length} selected`}
      />
      <Divider />
      <List className={classes.list} dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-all-item-${value}-label`;

          let ListText;
          if (element === "team") {
            ListText = <ListItemText id={labelId} primary={`${value.team}`} />
          } else {
            ListText = <ListItemText id={labelId} primary={`${value}`} />
          }

          return (
            <ListItem key={value} role="listitem" button onClick={handleToggle(value, element)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              {ListText}
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  return (
    <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
      <Grid item>{customList('TEAMS', teams, team_checked, "team")}</Grid>
      <Grid item>{customList('YEAR', years, year_checked, "year")}</Grid>
    </Grid>
  );
}
