export class WeatherParser {
  formatAPIResponse(weatherData) {
    const days = []
    const timezoneDifferenceInMilliseconds = weatherData.city.timezone * 1000

    weatherData.list.forEach(entry => {
      if (!'dt_txt' in entry) {
        throw new Error('Date not found')
      }

      const utcDate = new Date(entry.dt_txt)
      const localDate = this.#convertToLocalTimezone(utcDate, timezoneDifferenceInMilliseconds)
      const formattedDay = this.#getFormattedTime(localDate)
      const formattedTime = this.#getFormattedTime(localDate)

      const humidity = d.main.humidity
      const windSpeed = d.wind.speed

      const foundDay = this.#findOrCreateDay(days, formattedDay)

      foundDay.data.push({ 
        label: formattedTime, 
        humidity: humidity, 
        windSpeed: windSpeed 
      })
    })

    return days
  }

  #convertToLocalTimezone(UTCDate, timezoneDifferenceInMilliseconds) {
    const convertedTime = new Date(UTCDate.getTime() + timezoneDifferenceInMilliseconds)

    return convertedTime
  }

  #findOrCreateDay(days, formattedDay) {
    let foundDay = days.find(day => day.date === formattedDay)
    if (!foundDay) {
      days.push({ date: formattedDay, data: [] })
      foundDay = days.find(day => day.date === formattedDay)
    }
  }

  #getFormattedTime(date) {
    const date = date.toTimeString().slice(0, 2)

    return date
  }

  #getFormattedTime(date) {
    const time = date.toTimeString().slice(0, 8).slice(0, 5)

    return time
  }
}
