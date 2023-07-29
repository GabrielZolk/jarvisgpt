import axios from "axios"

export async function callback(city?: string) {
    console.log('weather function called with city:', city)

    const response = await axios.get(
        'https://api.open-meteo.com/v1/forecast?latitude=-23.1894848&longitude=-45.9454142&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m'
    )

    const currentWeather = response.data?.current_weather

    return JSON.stringify(currentWeather)
}