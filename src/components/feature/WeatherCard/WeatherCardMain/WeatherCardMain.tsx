import { WeatherData, WeatherDataItem } from '../../../../models';
import { getUTCShiftedTime } from '../../../../utils/date-utils';
import { getWeatherIconUrl } from '../../../../utils/weather-utils';
import './WeatherCardMain.scss';

const WeatherCardMain = ({ weather }: WeatherCardMainProps) => {

    const currentWeather: WeatherDataItem = weather.list[0];
    const projectedWeather: WeatherDataItem[] = weather.list.slice(1);

    return <div className='weather-card-main'>
        <div className='weather-card-main-today'>
            <img
                src={getWeatherIconUrl(weather.list[0].weather[0].icon)}
                alt=""
            />
            <h1>{ currentWeather.main.temp.toFixed(0) }°</h1>
            <p>{ currentWeather.weather[0].main }</p>
        </div>
        <div className='weather-card-main-projected'>
            { ProjectedWeatherItems(projectedWeather, weather.city.timezone) }
        </div>
    </div>
}

const ProjectedWeatherItems = (weather: WeatherDataItem[], timezoneOffset: number): React.ReactNode[] => {
    return weather.map((weather, index) => (
        <div className='weather-card-main-projected-item' key={ index }>
            <div className='weather-card-main-projected-item-date'>
                <p>{ getUTCShiftedTime(timezoneOffset, new Date(weather.dt_txt)) }</p>
            </div>
            <div className='weather-card-main-projected-item-information'>
                <img
                    src={getWeatherIconUrl(weather.weather[0].icon)}
                    alt=""
                />
                <h3>{ weather.main.temp.toFixed(0) }°</h3>
            </div>
        </div>
    ))
}

type WeatherCardMainProps = {
    weather: WeatherData
}

export default WeatherCardMain;