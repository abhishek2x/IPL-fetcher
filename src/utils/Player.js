import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import PlayerCard from '../components/PlayerCard';
import PlayerData from "../Data/mostRuns.json"

function Player() { 
  const [players] = useState(PlayerData)

  return (
    <Grid container spacing={3}>
      {players.map((player) => (
        <Grid item xs={4}>
          <PlayerCard player={player}/>
        </Grid>
      ))}
    </Grid>
  )
}

export default Player
