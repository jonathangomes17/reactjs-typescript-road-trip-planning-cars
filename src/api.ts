const getDistanceMatrix = async (origin: object, destination: object) => {
  // @ts-ignore
  origin = `${origin.lat},${origin.lng}`

  // @ts-ignore
  destination = `${destination.lat},${destination.lng}`

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin}&destinations=${destination}&key=AIzaSyDX3HTIsk87Bi4CFYJ2tUSXkAQcSM_BUpA`,
  )

  return response.json()
}

const getLatLng = async (address: string) => {
  let response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDX3HTIsk87Bi4CFYJ2tUSXkAQcSM_BUpA`,
  )

  return response.json()
}

const getClimate = async (cityName: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=db7a0fb364895141320aa24cd0e776e9`,
  )
  return response.json()
}

export { getDistanceMatrix, getLatLng, getClimate }
