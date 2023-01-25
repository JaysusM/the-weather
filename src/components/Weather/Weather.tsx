import { useState } from 'react';
import CitySelector from './CitySelector/CitySelector';
import useWeather from './hooks/useWeather';

const Weather = () => {

    const [city, setCity] = useState<string>('Málaga');
    const [ weather, isLoading, hasError, errorMessage ] = useWeather(city);


    return <>
        { isLoading && <p>Loading...</p> }
        { hasError && <p>{ errorMessage }</p> }
        { !isLoading && <p>Weather: { weather?.weather[0].main }</p> }
        <CitySelector onCityChange={setCity}/>
    </>
}

export default Weather;