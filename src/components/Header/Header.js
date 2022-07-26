import React, {useState} from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import useStyles from './styles'

export default function Header({ setCoordinates }) {

  const [autocomplete, setAutocomplete] = useState(null)

  const classes = useStyles()

  function onLoad(autoC) {
      setAutocomplete(autoC)
  }

  function onPlaceChanged() {
    const lat = autocomplete.getPlace().geometry.location.lat()
    const lng = autocomplete.getPlace().geometry.location.lng()
    setCoordinates({lat: lat, lng: lng}) // can use shorthand {lat, lng}
  }

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore New Places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder='Search...' classes={{root: classes.inputRoot, input: classes.inputInput}} />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  )
}