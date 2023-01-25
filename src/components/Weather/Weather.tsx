import { useState } from 'react';
import useWeather from './hooks/useWeather';

const Weather = () => {

    const [city, setCity] = useState<string>('Málaga');
    const [ weather, isLoading ] = useWeather(city);


    return <>
        { isLoading && <p>Loading...</p> }
        { !isLoading && <p>Weather: { weather?.weather[0].main }</p> }
        <button onClick={ () => setCity('Sevilla') }>Change City</button>
    </>
}

export default Weather;