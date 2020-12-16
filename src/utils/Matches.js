import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import MatchCard from '../components/MatchCard';
import MatchData from "../Data/matches.json"


function Matches() {
  const [matches, setMatches] = useState(MatchData);
  useEffect(() => {
    console.log(matches)
  }, [])

  return (
    <Grid container spacing={3}>
      {matches.map((match) => (
        <Grid item xs={4}>
          <MatchCard match={match}/>
        </Grid>
      ))}
    </Grid>
  )
}

export default Matches
