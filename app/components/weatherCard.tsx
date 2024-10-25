import styled from "styled-components";
import { Weather } from "@/interfaces/weather";

const WeatherCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 1rem;
	border: 1px solid black;
	margin: 1rem;
	width: 200px;
	border-radius: 10px;
`;

export default function WeatherCard(props: Weather) {
	return (
		<WeatherCardWrapper className="weather-card">
			<h2>{props.datetime}</h2>
			<p>{props.conditions}</p>
			<p>{props.description}</p>
			<p>
				{props.tempmin}°-{props.tempmax}°
			</p>
		</WeatherCardWrapper>
	);
}
