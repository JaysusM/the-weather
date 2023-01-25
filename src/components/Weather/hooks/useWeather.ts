import { useEffect, useState } from 'react'
import WeatherApi from '../../../services/weather-api';
import { WeatherData } from '../../../models/Weather';

type WeatherStatus = {
    loading: boolean,
    weather?: WeatherData
}

const weatherApi = new WeatherApi();

const useWeather = (cityName: string): [ WeatherData | undefined, boolean ] => {
    const [status, setStatus] = useState<WeatherStatus>({ loading: true, weather: undefined });

    useEffect(() => {
        setStatus({ loading: true, weather: undefined });
        weatherApi.getWeatherByCityName(cityName)
            .then((weather: WeatherData) => {
                setStatus({ loading: false, weather });
            });
    }, [cityName]);

    return [ status.weather, status.loading ];
}

export default useWeather;
