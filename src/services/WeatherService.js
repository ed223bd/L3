import fetch from 'node-fetch'

export class WeatherService {
  constructor(parser) {
    this.parser = parser
  }
  async getDataFromAPI(city) {
    const apiKey = process.env.API_key
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
    const weatherData = await response.json()

    if (weatherData.cod !== '200') {
      throw new Error('City not available')
    }

    const formattedDataArray = this.parser.formatAPIResponse(weatherData)
    return formattedDataArray
  }
}