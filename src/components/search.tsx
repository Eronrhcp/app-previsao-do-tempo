import.meta.env.VITE_API_KEY

import { useState } from "react";
import axios from "axios";
import { Icons } from "./Icons"
import { Search, Droplets, Thermometer, ThermometerSnowflake, ThermometerSun, Wind } from "lucide-react"
import { WeatherInfo } from "./weather-info";
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

export function SearchField() {
	const [data, setData] = useState<ResponseAPI>()
	const [location, setLocation] = useState('')

	const api_key = import.meta.env.VITE_API_KEY

	const URL_API = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric&lang=pt_br`

	const searchLocation = (event: { preventDefault: () => void; }) => {
		event.preventDefault()
		axios.get(URL_API).then((response) => {
			setData(response.data)
			console.log(response.data)
		})
		setLocation('')
	}

	return (
		<div className='mt-10 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
			<div className='relative'>
				<input
					type='text'
					className='p-4 block w-full border border-gray-400 rounded-full text-sm text-gray-500 placeholder-gray-500 bg-zinc-100 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-400 dark:text-neutral-400 dark:placeholder-neutral-400 dark:focus:ring-neutral-600'
					placeholder='Informe a sua localização...'
					id='city'
					value={location}
					onChange={(event) => setLocation(event.target.value)}
					onSubmit={searchLocation}
				/>
				<div className='absolute top-1/2 end-2 -translate-y-1/2'>
					<button
						type='button'
						className='size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white dark:bg-neutral-800'
						onClick={searchLocation}
					>
						<Search className='w-5 h-5' />
					</button>
				</div>
			</div>

			{data?.main ? (
				<section className="max-w-2xl text-center mx-auto mt-6 rounded-lg bg-neutral-100 text-gray-800 flex flex-col items-center justify-center">
					<p className='text-center text-2xl font-bold pt-7'>
						{data?.name}
					</p>
					<div className="flex flex-col justify-center">
						<div className='flex items-center justify-center text-center text-2xl font-bold'>
							{data.main ? (
								<p className="text-5xl">
									{(data.main.temp).toFixed(0)}ºC
								</p>
							) : null}
							{<img src={Icons(data?.weather.icon)} className="w-20 h-20" />}
							<p className="text-xs">
								{data?.main ? (
									<span>{data?.weather[0].description}</span>
								) : null}
							</p>
						</div>
						<div className="mb-6 flex gap-4 justify-center items-center p-4">
							<WeatherInfo title="Sensação">
								<Thermometer className="w-4 h-4" />
								{data?.main.feels_like.toFixed(0)}ºC
							</WeatherInfo>

							<WeatherInfo title="Máxima">
								<ThermometerSun className="w-4 h-4" />
								{data?.main.temp_max.toFixed(0)}ºC
							</WeatherInfo>

							<WeatherInfo title="Mínima">
								<ThermometerSnowflake className="w-4 h-4" />
								{data?.main.temp_min.toFixed(0)}ºC
							</WeatherInfo>

							<WeatherInfo title="Umidade">
								<Droplets className="w-4 h-4" />
								{data?.main.humidity}
							</WeatherInfo>

							<WeatherInfo title="Vento">
								<Wind className="w-4 h-4" />
								{data?.wind.speed}
								<span className="text-xs font-bold">km/h</span>
							</WeatherInfo>
						</div>
					</div>
				</section>
			) : null}
		</div>
	);
}
