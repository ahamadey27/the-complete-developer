import { query } from "express";
import fetch from "node-fetch";

export const routeHello = (): string => "Hello World";

export const routeAPINames = async (): Promise<string> => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data: responseItemType[];
    try {
        const response = await fetch(url);
        data = (await response.json()) as responseItemType[];
    } catch (err) {
        return "Error";
    }
    const names = data
        .map((item) => `id: ${item.id}, ${item.name}`)
        .join("<br>");
        return names;
};

const routeWeather = (query: WeatherQueryInterface): WeatherDetailType => queryWeatherData(query);

const queryWeatherData = (query: WeatherQueryInterface): WeatherDetailType => {
    return {
        zipcode: query.zipcode,
        weather: "sunny",
        temp: 35
    };
};