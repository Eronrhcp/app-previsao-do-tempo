import React, { useState } from "react";
import axios from "axios";
import Icons from "./components/Icons";

function App() {
  const [data, setWeather] = useState({});
  const [location, setLocation] = useState("");
  const [icon, setIcon] = useState({});

  const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=pt_br&appid=eb460caedaef58572cc154ef05c11842`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(urlApi).then((response) => {
        setWeather(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <section className="h-screen bg-gradient-to-r from-sky-500 to-indigo-500 ">
      <div className="bg-w py-8 lg:py-16 px-4 mx-auto max-w-screen-md self-center">
        <div>
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Insira sua localização..."
            required=""
          />
        </div>
        {data.main ? (
          <div className="bg-slate-100 rounded-md w-3/6 h-64">
            <div className="p-2 w-full pt-8 mt-8 text-center flex justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M200,224H150.54A266.56,266.56,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25a88,88,0,0,0-176,0c0,31.4,14.51,64.68,42,96.25A266.56,266.56,0,0,0,105.46,224H56a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16ZM56,104a72,72,0,0,1,144,0c0,57.23-55.47,105-72,118C111.47,209,56,161.23,56,104Zm112,0a40,40,0,1,0-40,40A40,40,0,0,0,168,104Zm-64,0a24,24,0,1,1,24,24A24,24,0,0,1,104,104Z"></path>
              </svg>
              <p className="text-slate-800 text-3xl">{data.name}</p>
            </div>
            <div>
              <div className="leading-normal my-5 text-lg flex items-baseline justify-center">
                {data.main ? (
                  <p className="text-8xl">
                    {((data.main.temp - 32) / (1, 8)).toFixed(1)}
                  </p>
                ) : null}
                <p className="text-3xl">ºF</p>
                <div className="px-2 text-right justify-center">
                  <div>{<img src={Icons(icon)} />}</div>
                  <div className="text-inherit text-slate-800">
                    <p>
                      {data.main ? (
                        <span>{data.weather[0].description}</span>
                      ) : null}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </section>
    /*
      const hasIcon = data.weather[0].icon == Icons(icon) 
      <img src={Icons(icons)} alt="icon-weather" className=""/>
      */
  );
}

export default App;
