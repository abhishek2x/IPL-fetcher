import React from 'react'
import Grid from '@material-ui/core/Grid';
import MatchCard from '../components/MatchCard';

function City() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <MatchCard />
      </Grid>
      <Grid item xs={4}>
        <MatchCard />
      </Grid>
      <Grid item xs={4}>
        <MatchCard />
      </Grid>
      <Grid item xs={4}>
        <MatchCard />
      </Grid>
      <Grid item xs={4}>
        <MatchCard />
      </Grid>
    </Grid>

  )
}

export default City
