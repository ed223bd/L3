import fetch from 'node-fetch'

export class WeatherService {
  // dataToDiagram() {
  //   const data = [
  //     { label: 'A', value: 2 },
  //     { label: 'B', value: 12 },
  //     { label: 'C', value: 32 },
  //     { label: 'D', value: 22 }
  //   ]
  //   return data
  // },

  async getDataFromAPI(city) {
    const API_Key = process.env.API_key
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_Key}&units=metric`)
    const weatherData = await response.json()
    // console.log(JSONdata)

    if (weatherData.cod === '200') {
      const days = this.formatAPIResponse(weatherData)

      return days
    } else {
      throw new Error('City not available')
    }
  }

  formatAPIResponse(weatherData) {
    const days = []
    weatherData.list.forEach(d => {
      if ('dt_txt' in d) {
        const formattedDate = new Date(d.dt_txt)
        const formattedDay = this.getDay(formattedDate)
        const formattedTime = this.getTime(formattedDate)

        const humidity = d.main.humidity
        const windSpeed = d.wind.speed

        let foundDay = days.find(day => day.date === formattedDay)
        if (!foundDay) {
          days.push({ date: formattedDay, data: [] })
          foundDay = days.find(day => day.date === formattedDay)
        }
        foundDay.data.push({ label: formattedTime, humidity: humidity, windSpeed: windSpeed })
      } else {
        console.log('Date not found')
      }
    })
    console.log(days)

    return days
  }

  getDay(date) {
    const day = date.toISOString().slice(0, 10)

    return day
  }

  getTime(date) {
    const time = date.toTimeString().slice(0, 8).slice(0, 5)

    return time
  }
}
