import { useState } from 'react';
import CitySelector from '../../components/CitySelector/CitySelector';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import useWeather from './hooks/useWeather';
import './Weather.scss';

const Weather = () => {

    const [city, setCity] = useState<string>('Málaga');
    const [ weather, isLoading, hasError, errorMessage ] = useWeather(city);


    return <div className='weather-page-wrapper'>
        { isLoading && <p>Loading...</p> }
        <CitySelector onCityChange={setCity}/>
        { hasError && <ErrorComponent message={ errorMessage }></ErrorComponent> }
        { !isLoading && weather && <WeatherCard weather={ weather }/> }
    </div>
}

export default Weather;