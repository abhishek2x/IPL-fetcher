import React from 'react'
import Grid from '@material-ui/core/Grid';
import OutlinedCard from '../components/OutlinedCard';

function Year() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <OutlinedCard />
      </Grid>
      <Grid item xs={4}>
        <OutlinedCard />
      </Grid>
      <Grid item xs={4}>
        <OutlinedCard />
      </Grid>
      <Grid item xs={4}>
        <OutlinedCard />
      </Grid>
      <Grid item xs={4}>
        <OutlinedCard />
      </Grid>
      <Grid item xs={4}>
        <OutlinedCard />
      </Grid>
    </Grid>

  )
}

export default Year