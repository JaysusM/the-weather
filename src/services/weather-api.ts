import axios, { AxiosInstance, AxiosResponse } from "axios";
import { WeatherData } from '../models/WeatherData';

class WeatherApi {
  private static axiosBase: AxiosInstance;

  constructor() {
    if (!WeatherApi.axiosBase) {
        const axiosInstance = axios.create({
            baseURL: "https://api.openweathermap.org/data/2.5",
                params: {
                    appid: process.env.REACT_APP_WEATHER_API_KEY
                }
        });
        WeatherApi.axiosBase = axiosInstance;
    }
  }

  getWeatherByCityName = (cityName: string): Promise<WeatherData> => {
    return WeatherApi.axiosBase.get<WeatherData>('/weather', {
        params: {
            q: cityName
        }
    })
      .then((response: AxiosResponse) => response.data);
  }
}

export default WeatherApi;
