import React, {useState} from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import useStyles from './styles.js';
import { PlaceSharp } from '@material-ui/icons';

import PlaceDetails from '../PlaceDetails/PlaceDetails'


export default function List() {

  const classes = useStyles()
  const [type, setType] = useState('Choose Type')
  const [rating, setRating] = useState('Choose Rating')

  const places = [
    {name: "Bla bla"},
    {name: "Bla blahhh"},
    {name: "Bla bla"},
    {name: "Bla blahhh"},
    {name: "Bla bla"},
    {name: "Bla blahhh"},
    {name: "Bla bla"},
    {name: "Bla blahhh"},
    {name: "Bla bla"},
    {name: "Bla blahhh"},
    {name: "Bla bla"},
    {name: "Bla blahhh"},
    {name: "Bla blahhhhhhh"}
  ]

  return (
    <div className={classes.container}>
      <Typography variant='h4'>Food & Dining around you</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={e => setType(e.target.value)}>
          <MenuItem value="restaurant">Restaurants</MenuItem>
          <MenuItem value="hotel">Hotel</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={e => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place.name} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}