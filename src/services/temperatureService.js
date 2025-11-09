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
    console.log(API_key)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Stockholm&appid=${API_key}&units=metric`)
    const weatherData = await response.json()
    // console.log(JSONdata)

    const exactTemp = weatherData.list[0].main.temp
    const temp = Math.round(exactTemp)
    console.log(temp)

    const entry1 = weatherData.list[0].dt_txt

    console.log(entry1)

    const day1 = new Date(entry1)
    const day = day1.toISOString().slice(0,10)
    const time = day1.toTimeString().slice(0,8).slice(0,2)

    console.log(day)
    console.log(time)

    const dataToday = [
      { label: time, value: temp },
      { label: time, value: temp }
    ]

    return dataToday
  }
}

