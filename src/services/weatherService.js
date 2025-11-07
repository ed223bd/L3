import fetch from 'node-fetch'

export default {
  dataToDiagram() {
    const data = [
      { label: 'A', value: 2 },
      { label: 'B', value: 12 },
      { label: 'C', value: 32 },
      { label: 'D', value: 22 }
    ]
    return data
  },

  async getDataFromAPI() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Stockholm&appid=d85ef3345cce21e0ee9febd38c5331d6&units=metric')
    const JSONdata = await response.json()
    console.log(JSONdata)

    
  }
}

