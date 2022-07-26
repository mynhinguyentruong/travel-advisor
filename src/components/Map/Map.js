
import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import Rating from '@material-ui/lab'
import  LocationOnOutlinedIcon  from '@material-ui/icons/LocationOnOutlined'

import useStyles from './styles'

export default function Map() {

  const classes = useStyles()

  return (
    <div className={classes.mapContainer}>Map goes here</div>
  )
  
}