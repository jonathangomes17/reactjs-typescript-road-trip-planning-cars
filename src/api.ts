const getDistanceMatrix = async (lat: string, log: string, destinations: string) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${lat},${log}&destinations=${destinations}key=AIzaSyDX3HTIsk87Bi4CFYJ2tUSXkAQcSM_BUpA`,
  )
  return response.json()
}

const getLatLog = async (address: string) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDX3HTIsk87Bi4CFYJ2tUSXkAQcSM_BUpA`,
  )

  return response.json()
}

const getClimate = async (cityName: string) => {
  const response = await fetch(
    `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=db7a0fb364895141320aa24cd0e776e9`,
  )
  return response.json()
}

export { getDistanceMatrix, getLatLog, getClimate }
