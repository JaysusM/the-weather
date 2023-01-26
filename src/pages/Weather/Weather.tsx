import { useState } from 'react';
import CitySelector from '../../components/CitySelector/CitySelector';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import useWeather from './hooks/useWeather';
import './Weather.scss';

const Weather = () => {

    const [city, setCity] = useState<string>('Málaga');
    const [ weather, isLoading, hasError, errorMessage ] = useWeather(city);


    return <div className='weather-page-wrapper'>
        { isLoading && <p>Loading...</p> }
        { hasError && <p>{ errorMessage }</p> }
        { !isLoading && weather && <WeatherCard weather={ weather }/> }
        <CitySelector onCityChange={setCity}/>
    </div>
}

export default Weather;