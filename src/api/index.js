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
    alert(error.response.status && "Sorry, I used BASIC subscription with no fee because I'm poor to make API Calls, if you see this message that means I reached the maximum quota for this API 🥹")
  }
}