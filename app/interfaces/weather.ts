export interface Weather {
	datetime: string;      // ISO string representing the date and time
	conditions: string;    // Weather conditions, e.g., 'Clear', 'Rain'
	description: string;   // More detailed description of the weather
	tempmin: number;       // Minimum temperature for the day
	tempmax: number;       // Maximum temperature for the day
}