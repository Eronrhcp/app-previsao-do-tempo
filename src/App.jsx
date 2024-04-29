import React, { useState } from "react";
import axios from "axios";
import Icons from "./components/Icons";
import { MapPin } from "lucide-react";
import { Location } from "./components/location";

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
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-md self-center">
        <div>
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
            placeholder="Insira sua localização..."
          />
        </div>
        {data.main ? (
          <div className="bg-slate-100 mx-auto rounded-md max-w-3xl h-64">
            <div className="p-2 w-full pt-8 mt-8 text-center flex items-center justify-center gap-2">
              <MapPin />
              <p className="text-slate-800 text-3xl">{data.name}</p>
            </div>
            <div>
              <div className="leading-normal my-5 text-lg flex items-center justify-center">
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
  )
}

export default App;
