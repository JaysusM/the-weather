import { WeatherData } from "../../models/WeatherData";
import { getWeatherIconUrl } from '../../utils/weather-utils';
import './WeatherCard.scss';

export type WeatherCardProps = {
  weather: WeatherData;
};

const WeatherCard = ({ weather }: WeatherCardProps) => {
  return (
    <div className='weather-card-container'>
        <div className='weather-card-header'>
            <h2>{ weather.name }</h2>
        </div>
      <p>Weather: { weather.weather[0].main }</p>
      <img
        src={getWeatherIconUrl(weather.weather[0].icon)}
        alt=""
      />
    </div>
  );
};

export default WeatherCard;
