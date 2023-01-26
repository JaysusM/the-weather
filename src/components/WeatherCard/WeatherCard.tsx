import { WeatherData } from "../../models/WeatherData";
import { getUTCShiftedTime, getWeatherIconUrl } from '../../utils/weather-utils';
import WeatherCardDetails from './WeatherCardDetails/WeatherCardDetails';
import './WeatherCard.scss';

export type WeatherCardProps = {
  weather: WeatherData;
};

const WeatherCard = ({ weather }: WeatherCardProps) => {

  return (
    <div className='weather-card-container'>
        <div className='weather-card-header'>
            <h3 className='weather-card-header-title'><b>{ weather.name },</b> { weather.sys.country }</h3>
            <p className='weather-card-header-subtitle'>Time: { getUTCShiftedTime(weather.timezone) }</p>
        </div>
        <div className='weather-card-body'>
          <img
            src={getWeatherIconUrl(weather.weather[0].icon)}
            alt=""
          />
          <h1>{ weather.main.temp.toFixed(0) }°</h1>
          <p>{ weather.weather[0].main }</p>
          <WeatherCardDetails weather={weather}></WeatherCardDetails>
      </div>
    </div>
  );
};

export default WeatherCard;
