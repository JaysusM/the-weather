import { WeatherData } from '../../../models';
import { getUTCShiftedTime } from '../../../utils/date-utils';
import WeatherCardDetails from './WeatherCardDetails/WeatherCardDetails';
import Card from '../../ui/Card/Card';
import './WeatherCard.scss';
import WeatherCardMain from './WeatherCardMain/WeatherCardMain';

export type WeatherCardProps = {
  weather: WeatherData;
};

const WeatherCard = ({ weather }: WeatherCardProps) => {

  return (
    <Card className='weather-card'>
        <div className='weather-card-header'>
            <h3 className='weather-card-header-title'><b>{ weather.city.name },</b> { weather.city.country }</h3>
            <p className='weather-card-header-subtitle'>Time: { getUTCShiftedTime(weather.city.timezone) }</p>
        </div>
        <div className='weather-card-body'>
          <WeatherCardMain weather={weather} />
          <WeatherCardDetails weather={weather}></WeatherCardDetails>
      </div>
    </Card>
  );
};

export default WeatherCard;
