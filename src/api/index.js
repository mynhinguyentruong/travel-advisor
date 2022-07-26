import axios from 'axios'

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'




export const getPlacesData = async (sw, ne) => {
  try {
    const response = await axios.get(url, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': 'df18c2aef8msh13c1ef183b4c8fbp10a1c5jsnbe8e94c9dd36',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    })
    const { data: { data } } = response
    return data

  } catch(error) {
    console.log(error)
  }
}