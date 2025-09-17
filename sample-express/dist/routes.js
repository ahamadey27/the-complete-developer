import fetch from "node-fetch";
export const routeHello = () => "Hello World";
export const routeAPINames = async () => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data;
    try {
        const response = await fetch(url);
        data = (await response.json());
    }
    catch (err) {
        return "Error";
    }
    const names = data
        .map((item) => `id: ${item.id}, ${item.name}`)
        .join("<br>");
    return names;
};
const routeWeather = (query) => queryWeatherData(query);
const queryWeatherData = (query) => {
    return {
        zipcode: query.zipcode,
        weather: "sunny",
        temp: 35
    };
};
