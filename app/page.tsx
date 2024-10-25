"use client";

import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

// Container to center the content on the page
const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-color: #f0f4f8;
	padding: 2rem;
`;

// Heading styling
const Heading = styled.h1`
	font-size: 2.5rem;
	color: #333;
	margin-bottom: 1rem;
	text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`;

// Subheading paragraph styling
const SubHeading = styled.p`
	font-size: 1.2rem;
	color: #555;
	margin-bottom: 2rem;
`;

// Input field styling
const Input = styled.input`
	padding: 0.75rem;
	font-size: 1rem;
	border: 2px solid #0070f3;
	border-radius: 5px;
	outline: none;
	margin-bottom: 1.5rem;
	width: 250px;
	transition: border-color 0.3s;

	&:focus {
		border-color: #005bb5;
	}
`;

// Styled link as a button
const StyledLink = styled(Link)`
	display: inline-block;
	background-color: #0070f3;
	color: white;
	padding: 0.75rem 1.5rem;
	border-radius: 5px;
	text-decoration: none;
	font-size: 1rem;
	font-weight: bold;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #005bb5;
	}
`;

export default function Home() {
	const [city, setCity] = useState("");

	return (
		<StyledDiv>
			<Heading>Find the Weather in any city!</Heading>
			<SubHeading>Enter a city name below to get the current weather</SubHeading>
			<Input
				type="text"
				value={city}
				placeholder="City name"
				onChange={(e) => setCity(e.target.value)}
			/>
			<StyledLink href={`/${city}`}>Get Weather</StyledLink>
		</StyledDiv>
	);
}
