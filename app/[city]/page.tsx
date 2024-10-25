"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";
import WeatherCard from "../components/weatherCard";
import styled from "styled-components";
import { Weather } from "@app/interfaces/weather";

const WeatherContentWrapper = styled.main`
	width: 80vw;
	margin: 2rem auto;
	padding: 1rem;
	background-color: #e0f7fa;
	border-radius: 10px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const CityName = styled.h1`
	font-size: 3rem;
	font-weight: bold;
	color: #6a1b9a;
	text-align: center;
	margin-bottom: 1rem;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const WeatherCardsContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	gap: 1.5rem;
	justify-content: center;
	padding: 1rem;
	border: 2px solid #ffb74d;
	border-radius: 10px;
	background-color: #fff3e0;
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`;

export default function CityPage() {
	const params = useParams();

	// Fetch weather data with SWR
	const { data, error } = useSWR(
		`/api/getWeatherData?city=${params.city}`,
		(url: string) =>
			fetch(url)
				.then((res) => res.json())
	);

	// Handle error and loading states
	if (error) return <div>Failed to load</div>;
	if (!data) return <div>Loading...</div>;

	// If there is data, get the days otherwise an empty array.
	const days = data?.days || [];

	return (
		<WeatherContentWrapper>
			<CityName>{params.city}</CityName>
			<WeatherCardsContainer>
				{days.map((weather: Weather, i: number) => (
					<WeatherCard
						key={i}
						datetime={weather.datetime}
						conditions={weather.conditions}
						description={weather.description}
						tempmin={weather.tempmin}
						tempmax={weather.tempmax}
					/>
				))}
			</WeatherCardsContainer>
		</WeatherContentWrapper>
	);
}