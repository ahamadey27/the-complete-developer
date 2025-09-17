//Defines response items of async API call
type responseItemType = {
    id: string;
    name: string;
}

type WeatherDetailType = {
    zipcode: string;
    weather: string;
    temp?: string;
}

interface WeatherQueryInterface {
    zipcode: string;
}