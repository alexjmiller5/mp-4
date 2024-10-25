import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

export async function GET(request: Request): Promise<NextResponse> {
    // Using String-deconstruction, extract search parameters from the URL
    const { searchParams } = new URL(request.url);

    // Get the value of the 'city' parameter from the query string
    const city = searchParams.get("city");

    // If no 'city' parameter is provided, return a 400 Bad Request error response
    if (!city) {
        return NextResponse.json({ error: "No [city] provided" }, { status: 400 });
    }

    // Make an API request to Visual Crossing to fetch weather data for the specified city
    const res = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=us&include=days%2Ccurrent%2Cevents&key=${WEATHER_API_KEY}&contentType=json`
    );

    // If the API request fails (status code other than 200), return a 500 Internal Server Error response
    if (res.status !== 200) {
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }

    // Parse the JSON data from the API response
    const data = await res.json();

    // Return the parsed data in the response as JSON
    return NextResponse.json(data);
}