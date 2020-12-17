import React, { useEffect, useState, useContext } from 'react'
import Grid from '@material-ui/core/Grid';
import MatchCard from '../components/MatchCard';
import MatchData from "../Data/matches.json"
import { YearContext } from '../Context/YearContext';
import { TeamContext } from '../Context/TeamContext';
import { QueryContext } from '../Context/QueryContext';


function Matches() {
  const [year_checked] = useContext(YearContext);
  const [team_checked] = useContext(TeamContext);
  const [matches, setMatches] = useState(MatchData);
  const [query] = useContext(QueryContext)

  useEffect(() => {
    if (query.length > 0) {
      let newMatches = []
      const getResuts = (main, query) => {
        main.forEach(match => {
          if (query === match.team2 || query === match.team1) {
            newMatches.push(match);
          }
        })
      }
      // console.log("query to be searched: ", query);
      getResuts(matches, query);
      setMatches(newMatches);
      // console.log("New Matches: ", newMatches);
    } else {
      setMatches(MatchData);
    }
  }, [query])

  useEffect(() => {
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
          if (checker.includes(match.team2) || checker.includes(match.team1)) {
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
