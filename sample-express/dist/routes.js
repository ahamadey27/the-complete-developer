import fetch from "node-fetch"; // import fetch module for async requests
// simple hello route for existing /hello endpoint
export const routeHello = () => "Hello World"; //create first for existing /hello endpoint
// This route will create an API endpoint page that will list usernames and IDs
export const routeAPINames = async () => {
    // define async so we can use await syntax for fetch call
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data;
    try {
        const response = await fetch(url);
        data = (await response.json());
    }
    catch (err) {
        // return the error (caller can decide how to represent it)
        return err.toString();
    }
    // define API endpoint in constant and another variable to store async data (data is scoped within try catch block)
    const names = data
        .map((item) => `id: ${item.id}, ${item.name}`) //.map iterates over data to display in JSON if succeeds
        .join("<br>"); // join all items with a break tag
    return names;
};
export const routeWeather = (query) => queryWeatherData(query);
const queryWeatherData = (query) => {
    return {
        zipcode: query.zipcode,
        weather: "sunny",
        temp: 35
    };
};
