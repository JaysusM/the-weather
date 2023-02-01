import axios, { AxiosInstance, AxiosResponse } from "axios";
import { WeatherData } from '../models';

class WeatherApi {
  private static axiosBase: AxiosInstance;

  constructor() {
    if (!WeatherApi.axiosBase) {
        const axiosInstance = axios.create({
            baseURL: "https://api.openweathermap.org/data/2.5",
                params: {
                    appid: process.env.REACT_APP_WEATHER_API_KEY,
                    units: 'metric'
                }
        });
        WeatherApi.axiosBase = axiosInstance;
    }
  }

  getWeatherByCityName = (cityName: string): Promise<WeatherData> => {
    return WeatherApi.axiosBase.get<WeatherData>('/forecast', {
        params: {
            q: cityName,
            cnt: 4
        }
    })
      .then((response: AxiosResponse) => response.data);
  }

  getWeatherByLatitudeAndLongitude = (latitude: number, longitude: number): Promise<WeatherData> => {
    return WeatherApi.axiosBase.get<WeatherData>('/forecast', {
        params: {
            lat: latitude,
            lon: longitude,
            cnt: 4
        }
    })
      .then((response: AxiosResponse) => response.data);
  }
}

export default WeatherApi;
