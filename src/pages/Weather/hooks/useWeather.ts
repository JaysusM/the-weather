import { useEffect, useState } from 'react'
import WeatherApi from '../../../services/weather-api';
import { WeatherData } from '../../../models/WeatherData';
import { AxiosError } from 'axios';

type WeatherStatus = {
    loading: boolean,
    error: boolean,
    weather?: WeatherData,
    errorMessage?: string
}

const weatherApi = new WeatherApi();

const useWeather = (cityName: string, currentLocation: { lat?: number, lon?: number }): [ WeatherData | undefined, boolean, boolean, string | undefined ] => {
    const [status, setStatus] = useState<WeatherStatus>({ loading: true, error: false, weather: undefined });

    useEffect(() => {

        const getWeather = () => {
            if (cityName?.length > 0)
                return weatherApi.getWeatherByCityName(cityName);
            else if (currentLocation.lat && currentLocation.lon)
                return weatherApi.getWeatherByLatitudeAndLongitude(currentLocation.lat, currentLocation.lon);
            
            // Default fallback
            // Throwing an error is probably the best option
            return weatherApi.getWeatherByCityName('Málaga');
        }

        setStatus({ loading: true, error: false, weather: undefined });
        getWeather()
            .then((weather: WeatherData) => {
                setStatus({ loading: false, error: false, weather });
            })
            .catch((error: AxiosError<{ cod: number, message: string }>) => {
                console.log({ error })
                setStatus({ loading: false, error: true, errorMessage: error.response?.data?.message || error.message });
            })
    }, [cityName, currentLocation.lat, currentLocation.lon]);

    return [ status.weather, status.loading, status.error, status.errorMessage ];
}

export default useWeather;
