import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import PlayerCard from '../components/PlayerCard';
import PlayerData from "../Data/mostRuns.json"

function Player() { 
  const [players, setPlayers] = useState(PlayerData)
  useEffect(() => {
    console.log(players)
  }, [])

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
