import { faTemperatureArrowDown, faTemperatureArrowUp, faWater, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherData } from '../../../models/WeatherData'
import Box from '../../Box/Box';
import './WeatherCardDetails.scss';

const WeatherCardDetails = ({ weather }: WeatherCardDetailsProps) => {
    
    return <div className='weather-card-details'>
        <Box title='Wind' value={ weather.wind.speed.toFixed(0) + ' Km/h'} icon={ faWind } />
        <Box title='Humidity' value={ weather.main.humidity + '%' } icon={ faWater } />
        <Box title='Min Temp' value={ weather.main.temp_min.toFixed(0) + '°'} icon={ faTemperatureArrowDown } />
        <Box title='Max Temp' value={ weather.main.temp_max.toFixed(0) + '°'} icon={ faTemperatureArrowUp } />
    </div>;
}

type WeatherCardDetailsProps = {
    weather: WeatherData
}

export default WeatherCardDetails;