import React, { useEffect, useState, useContext } from 'react'
import Grid from '@material-ui/core/Grid';
import MatchCard from '../components/MatchCard';
import MatchData from "../Data/matches.json"
import { YearContext } from '../Context/YearContext';
import { TeamContext } from '../Context/TeamContext';
// import { FilterClickContext } from '../Context/FilterClick';


function Matches() {
  const [year_checked, setYearChecked] = React.useContext(YearContext);
  const [team_checked, setTeamChecked] = React.useContext(TeamContext);
  const [matches, setMatches] = useState(MatchData);
  // const [click, setClick] = useContext(FilterClickContext)

  useEffect(() => {
    // console.log(team_checked);
    // console.log(year_checked);
    if (team_checked.length > 0 || year_checked.length > 0) {
      let newMatches = []

      const YearFilteredMatches = (main, checker) => {
        main.forEach(match => {
          const element = match.Season;
          if (checker.includes(element)) {
            newMatches.push(match);
          }
        });
      }
      const TeamFilteredMatches = (main, checker) => {
        main.forEach(match => {
          const element1 = match.team1;
          const element2 = match.team2;

          if (checker.includes(element1) || checker.includes(element2)) {
            newMatches.push(match);
          }
        });
      }

      const team_arr = team_checked.map(ele => ele.team)
      TeamFilteredMatches(MatchData, team_arr)
      YearFilteredMatches(MatchData, year_checked)
      setMatches(newMatches);
    } else {
      setMatches(MatchData);
    }
    // console.log("Changing to false")
    // setClick(0);
  }, [team_checked, year_checked])

  return (
    <Grid container spacing={3}>
      {matches.map((match) => (
        <Grid item xs={4}>
          <MatchCard match={match} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Matches
