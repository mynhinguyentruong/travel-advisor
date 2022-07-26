
import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import Rating from '@material-ui/lab'
import  LocationOnOutlinedIcon  from '@material-ui/icons/LocationOnOutlined'

import useStyles from './styles'

export default function Map() {

  const classes = useStyles()
  const isMobile = useMediaQuery('(min-width:600px)')
  const coordinates = { lat: 110, lng: 0}

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyDLPiALbk66K_zeAXZQQeO42BxaMpWEFm4' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50,50]}
        options={''}
        onChange={''}
        onChildClick={''}
      >

      </GoogleMapReact>
    </div>
  )
  
}