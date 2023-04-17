import React, { useState } from 'react'
import axios from 'axios'

function App() {
   const [data, setWeather] = useState({})
   const [location, setLocation] = useState('')

   const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=eb460caedaef58572cc154ef05c11842`

   const searchLocation = (event) => {
      if (event.key === 'Enter') {
         axios.get(urlApi).then((response) => {
            setWeather(response.data)
            console.log(response.data)
         })
         setLocation('')
      }
   }

   return (
      <div className='app'>
         <h1 className="text-3xl font-bold text-center mt-20">
            Previsão do Tempo ☀️🌦️⛈️🌈
         </h1>
         <div className="search" />
         <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder='Localização'
            type='text' />
         <div className='name'>
            <p>{data.name}</p>
         </div>
         <div className='temp'>
            <p>{data.main ? <h2>{data.main.temp}</h2> : null}</p>
         </div>
         <div className='temp_min'>
            <p>{data.main ? <h2>{data.main.temp_min}</h2> : null}</p>
         </div>
         <div className='temp_max'>
            <p>{data.main ? <h2>{data.main.temp_max}</h2> : null}</p>
         </div>
         <div className='humidity'>
            <p>{data.main ? <h2>{data.main.humidity}</h2> : null}</p>
         </div>
         <div className='pressure'>
            <p>{data.main ? <h2>{data.main.pressure}</h2> : null}</p>
         </div>
      </div>
   );
}

export default App
