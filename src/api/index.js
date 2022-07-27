import axios from 'axios'




export const getPlacesData = async (type, sw, ne) => {
  try {
    const response = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_API_KEY,
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    })
    const { data: { data } } = response
    return data

  } catch(error) {
    console.log(error)
    alert(error.response.status && "Sorry, I used BASIC subscription plan with no fee because I'm poor to make API Calls, if you see this message that means I reached the maximum quota for this API 🥹")
  }
}

export const getWeatherData = async(lat, lng) => {

  try {
    const {data} = await axios.get('https://community-open-weather-map.p.rapidapi.com/weather', {
      params: {
        lat: lat,
        lon: lng,
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_API_KEY,
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
      }
    })
    return data
  } catch(error) {
    console.log(error)
  }
}