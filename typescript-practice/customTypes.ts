type WeatherDetailType = {
    weather: string;
    zipcode: string;
    temp?: number;
};

let weatherDetail: WeatherDetailType = {
    weather: "sunny",
    zipcode: "46945",
    temp: 85
};
const getWeatherDetail = (data: WeatherDetailType): WeatherDetailType => data;