import { useEffect, useState } from "react";
import "./App.scss";

const App = () => {
	const [location, setLocation] = useState("Bursa");
	const [weatherInfo, setWeatherInfo] = useState({});
	const [city, setCity] = useState("");

	const params = {
		key: "d1cd7d01c8be4eab9e9103736210703",
		location,
		day: 3,
	};

	useEffect(() => {
		fetch(
			`http://api.weatherapi.com/v1/forecast.json?key=${params.key}&q=${params.location}&days=${params.day}&aqi=yes&alerts=no`
		)
			.then((response) => response.json())
			.then((data) => setWeatherInfo(data));
	}, [location]);

	return (
		<div className="weather-wrapper">
			<input
				className="input"
				onKeyDown={(event) => (event.keyCode === 13 ? setLocation(city) : null)}
				onChange={(event) => setCity(event.target.value)}
			/>
			<div className="weather-card">
				{weatherInfo.current && (
					<>
						<h5>{weatherInfo.location.name}</h5>
						<h2>
							{weatherInfo.forecast.forecastday[0].day.avgtemp_c}{" "}
							<img
								src={weatherInfo.forecast.forecastday[0].day.condition.icon}
								alt="day1"
							/>
							<pre>Current</pre>
						</h2>
						<h2>
							{weatherInfo.forecast.forecastday[1].day.avgtemp_c}{" "}
							<img
								src={weatherInfo.forecast.forecastday[0].day.condition.icon}
								alt="day2"
							/>
							<p>Tomorrow</p>
						</h2>
						<h2>
							{weatherInfo.forecast.forecastday[2].day.avgtemp_c}{" "}
							<img
								src={weatherInfo.forecast.forecastday[0].day.condition.icon}
								alt="day3"
							/>
							<p>Overmorrow</p>
						</h2>
					</>
				)}
			</div>
		</div>
	);
};

export default App;
