import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import OutlinedCard from '../components/OutlinedCard';
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
          <OutlinedCard match={match}/>
        </Grid>
      ))}
    </Grid>
  )
}

export default Matches
