import { useState } from 'react';
import CitySelector from '../../components/CitySelector/CitySelector';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import withGeolocation, { WithGeolocationProps } from '../../hocs/withGeolocation';
import useWeather from './hooks/useWeather';
import './Weather.scss';

const Weather = ({ lat, lon }: WeatherProps) => {

    const [city, setCity] = useState<string>('');
    const [ weather, isLoading, hasError, errorMessage ] = useWeather(city, { lat, lon });


    return <div className='weather-page-wrapper'>
        <CitySelector onCityChange={setCity}/>
        { isLoading && <LoadingSpinner /> }
        { hasError && <ErrorComponent message={ errorMessage }></ErrorComponent> }
        { !isLoading && weather && <WeatherCard weather={ weather }/> }
    </div>
}

type WeatherProps = {} & WithGeolocationProps;

export default withGeolocation(Weather);