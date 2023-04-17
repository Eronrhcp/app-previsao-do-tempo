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
      <section className="bg-white dark:bg-gray-900">
         <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <div>
               <input
                  type="text"
                  value={location}
                  onChange={event => setLocation(event.target.value)}
                  onKeyPress={searchLocation}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Insira sua localização..."
                  required="" />
            </div>
            <div className="p-2 w-full pt-8 mt-8 text-center flex justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
               <path d="M200,224H150.54A266.56,266.56,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25a88,88,0,0,0-176,0c0,31.4,14.51,64.68,42,96.25A266.56,266.56,0,0,0,105.46,224H56a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16ZM56,104a72,72,0,0,1,144,0c0,57.23-55.47,105-72,118C111.47,209,56,161.23,56,104Zm112,0a40,40,0,1,0-40,40A40,40,0,0,0,168,104Zm-64,0a24,24,0,1,1,24,24A24,24,0,0,1,104,104Z"></path></svg>
            <p className="text-slate-800 text-3xl">{data.name}</p>
            </div>
            <div>   
               <div className="leading-normal my-5 text-lg flex items-baseline justify-center">
                  {data.main ? <p className='text-8xl'>{data.main.temp}</p> : null}
                  <p className='text-3xl'>ºF</p>
               </div>
            </div>

         </div>
      </section>
      /* 
      <div className=' bg-slate-500 h-screen'>
         <div className='container mx-auto mt-20'>
            <input
               className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
               value={location}
               onChange={event => setLocation(event.target.value)}
               onKeyPress={searchLocation}
               placeholder='Localização'
               type='text' />
         </div>
         <div>
            <div className='name'>
               <p>{data.name}</p>
            </div>
            <div className='temp'>
               <p>{data.main ? <span>{data.main.temp}</span> : null}</p>
            </div>
            <div className='temp_min'>
               <p>{data.main ? <span>{data.main.temp_min}</span> : null}</p>
            </div>
            <div className='temp_max'>
               <p>{data.main ? <span>{data.main.temp_max}</span> : null}</p>
            </div>
            <div className='humidity'>
               <p>{data.main ? <span>{data.main.humidity}</span> : null}</p>
            </div>
            <div className='pressure'>
               <p>{data.main ? <span>{data.main.pressure}</span> : null}</p>
            </div>
         </div>
      </div> */
   );
}

export default App
