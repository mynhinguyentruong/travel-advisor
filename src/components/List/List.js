import React, {useState, useEffect, createRef} from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import useStyles from './styles.js';
import { PlaceSharp } from '@material-ui/icons';

import PlaceDetails from '../PlaceDetails/PlaceDetails'


export default function List({places, childClicked,isLoading, type, setType, rating, setRating}) {

  const classes = useStyles()
  
  const [elRefs, setElRefs] = useState([])
  

  useEffect(() => {
    if(places.length > 0) {
      const refs = Array(places.length).fill().map((element, i) => elRefs[i] || createRef())
      setElRefs(refs)
    }
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant='h4'>Food & Dining around you</Typography>
      {isLoading ? (
        <div className={classes.loading}>
            <CircularProgress size="5rem"/>
        </div>
      ) : (
        <>
        <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={e => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotel</MenuItem>
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
          <Grid ref={elRefs[i]} item key={i} xs={12}>
            <PlaceDetails 
              place={place} 
              selected={Number(childClicked) === i}
              refProp={elRefs[i]}
              />
          </Grid>
        ))}
      </Grid>
        </>
      )}
      
    </div>
  )
}