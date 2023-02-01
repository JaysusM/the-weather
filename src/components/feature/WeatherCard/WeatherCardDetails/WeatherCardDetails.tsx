import { faTemperatureArrowDown, faTemperatureArrowUp, faWater, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherData } from '../../../../models'
import Box from '../../../ui/Box/Box';
import './WeatherCardDetails.scss';

const WeatherCardDetails = ({ weather }: WeatherCardDetailsProps) => {
    
    return <div className='weather-card-details'>
        <Box title='Wind' value={ weather.list[0].wind.speed.toFixed(0) + ' Km/h'} icon={ faWind } />
        <Box title='Humidity' value={ weather.list[0].main.humidity + '%' } icon={ faWater } />
        <Box title='Min Temp' value={ weather.list[0].main.temp_min.toFixed(0) + '°'} icon={ faTemperatureArrowDown } />
        <Box title='Max Temp' value={ weather.list[0].main.temp_max.toFixed(0) + '°'} icon={ faTemperatureArrowUp } />
    </div>;
}

type WeatherCardDetailsProps = {
    weather: WeatherData
}

export default WeatherCardDetails;