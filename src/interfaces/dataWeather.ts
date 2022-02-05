export interface DataWeather {
    temp?: number;
    temp_max?: number;
    temp_min?: number,
    feels_like?: number,
    name?: string,
    country?: string,
    description?: string,
}
export interface DataWeatherHook {
    dataWeather: DataWeather,
    setDataWeather: (weather:DataWeather) => void,
}