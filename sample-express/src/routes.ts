import { query } from "express"; //This statement pulls in Express’s built-in query middleware factory. When you call query(), it returns a middleware function that parses the URL’s query string and populates req.query with its key–value pairs

import fetch from "node-fetch"; // import fetch module for async requests

// simple hello route for existing /hello endpoint
export const routeHello = (): string => "Hello World"; //create first for existing /hello endpoint

// This route will create an API endpoint page that will list usernames and IDs
export const routeAPINames = async (): Promise<string> => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users"; // define async so we can use await syntax for fetch call
    let data: responseItemType[];
    try {
        const response = await fetch(url);
        data = (await response.json()) as responseItemType[];
    } catch (err) {
        return (err as Error).toString(); // return the error (caller can decide how to represent it)
    }
    // define API endpoint in constant and another variable to store async data (data is scoped within try catch block)
    const names = data
        .map((item) => `id: ${item.id}, ${item.name}`) //.map iterates over data to display in JSON if succeeds

        .join("<br>"); // join all items with a break tag
    return names;
};

export const routeWeather = (query: WeatherQueryInterface): WeatherDetailType => queryWeatherData(query);

const queryWeatherData = (query: WeatherQueryInterface): WeatherDetailType => {
    return {
        zipcode: query.zipcode,
        weather: "sunny",
        temp: 35
    };
};