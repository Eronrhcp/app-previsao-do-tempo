import { useState } from "react";
import axios from "axios";
import { Icons } from "./components/Icons";
import { Footer } from "./components/footer";
import { Droplets, Thermometer, ThermometerSnowflake, ThermometerSun, Wind } from "lucide-react";
import { Header } from "./components/header";
import { SearchField } from "./components/search";

interface ResponseAPI {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
  };
  dt: number;
  timezone: number;
  id: number;
  cod: number;
}

export function App() {
  const [data, setData] = useState<ResponseAPI>()
  // const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const URL_API = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=eb460caedaef58572cc154ef05c11842&units=metric&lang=pt_br`

  // Averiguar o porquê de eu tomar um 401 quando uso variáveis de ambiente ao chamar a API
  //const URL_API = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=pt_br&appid=${process.env.REACT_APP_API_KEY}`

  const searchLocation = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    axios.get(URL_API).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }

  // function fahrenheitToCelsius(fahrenheit) {
  //   const celsius = (fahrenheit - 32) * 5 / 9;
  //   return Number(celsius);
  // }

  // function capitalizeFirstLetter(word: string) {
  //   return word.charAt(0).toUpperCase() + word.slice(1);
  // }

  return (
    <div className="h-screen flex flex-col pb-6">
      <main className="h-full flex flex-col justify-center">
        <Header />
        <SearchField />
      </main>

      {/* <h1 className='text-4xl font-bold text-center mt-10'>
          App de Previsão do Tempo
        </h1>
        <p className='text-sm mt-2'>
          O aplicativo utiliza a API do{' '}
          <a
            href='https://openweathermap.org/'
            target='_blank'
            className='font-semibold hover:text-yellow-400'
          >
            OpenWeatherMap
          </a>{' '}
          para obter previsões do tempo.
        </p> */}
      {/* <div className='flex gap-2'>
          <input
            className='text-gray-600 placeholder:text-gray-500 p-2 mt-10 rounded-sm w-80 outline-1 outline-slate-100 shadow-md'
            placeholder='Informe a sua localização...'
            type='text'
            name='city'
            id='city'
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onSubmit={searchLocation}
          />
          <button
            className='px-8 text-base font-medium mt-10 rounded-sm bg-white text-gray-700 hover:bg-gray-100 transition-colors'
            type='submit'
            onClick={searchLocation}
          >
            Buscar
          </button>
        </div> */}

      {/* {data?.main ? (
          <section className="w-[440px] h-[220px] m-6 bg-neutral-50 text-gray-800 flex flex-col items-center justify-center">
            <p className='text-center text-2xl font-bold pt-7'>
              {data?.name}
            </p>
            <div className="flex flex-col justify-center">
              <div className='flex items-center justify-center text-center text-2xl font-bold'>
                {data.main ? (
                  <p className="text-5xl">
                    {(data.main.temp).toFixed(0)}º
                  </p>
                ) : null}
                {<img src={Icons(Icons)} className="w-20 h-20" />}
                <p className="text-xs">
                  {data?.main ? (
                    <span>{data?.weather[0].description}</span>
                  ) : null}
                </p>
              </div>
              <div className="flex gap-4 justify-center items-center pt-4">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-xs">Sensação</p>
                  <div className="flex items-center">
                    <Thermometer className="w-4 h-4" />
                    {data?.main.feels_like.toFixed(0)}º
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <p className="text-xs">Máxima</p>
                  <div className="flex items-center gap-1">
                    <ThermometerSun className="w-4 h-4" />
                    {data?.main.temp_max.toFixed(0)}º
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <p className="text-xs">Mínima</p>
                  <div className="flex items-center gap-1">
                    <ThermometerSnowflake className="w-4 h-4" />
                    {data?.main.temp_min.toFixed(0)}º
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <p className="text-xs">Umidade</p>
                  <div className="flex items-center gap-1">
                    <Droplets className="w-4 h-4" />
                    {data?.main.humidity}
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <p className="text-xs">Vento</p>
                  <div className="flex items-center gap-1">
                    <Wind className="w-4 h-4" />
                    {data?.wind.speed}
                    <span className="text-xs font-bold">km/h</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

        ) : null} */}



      <Footer />
    </div>
  )
}