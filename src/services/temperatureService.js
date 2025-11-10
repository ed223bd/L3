import fetch from 'node-fetch'

export default {
  // dataToDiagram() {
  //   const data = [
  //     { label: 'A', value: 2 },
  //     { label: 'B', value: 12 },
  //     { label: 'C', value: 32 },
  //     { label: 'D', value: 22 }
  //   ]
  //   return data
  // },

  async getDataFromAPI() {
    const API_key = process.env.API_key
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Stockholm&appid=${API_key}&units=metric`)
    const weatherData = await response.json()
    // console.log(JSONdata)

    const days = this.formatAPIResponse(weatherData)

    return days
  },

  formatAPIResponse(weatherData) {
    const days = []
    weatherData.list.forEach(d => {
      if ('dt_txt' in d) {
        const formattedDate = new Date(d.dt_txt)
        const formattedDay = this.getDay(formattedDate)
        const formattedTime = this.getTime(formattedDate)

        const exactTemp = d.main.temp
        const temp = Math.round(exactTemp)

        let foundDay = days.find(day => day.date === formattedDay)
        if (!foundDay) {
          days.push({ date: formattedDay, data: [] })
          foundDay = days.find(day => day.date === formattedDay)
        }
        foundDay.data.push({ label: formattedTime, value: temp })
      } else {
        console.log('NO')
      }
    })
    console.log(days)

    return days
  },

  getDay(date) {
    const day = date.toISOString().slice(0, 10)

    return day
  },

  getTime(date) {
    const time = date.toTimeString().slice(0, 8).slice(0, 2)

    return time
  }
}

