import { WeatherData, WeatherDataItem } from '../../../../models';
import { getTime } from '../../../../utils/date-utils';
import { getWeatherIconUrl } from '../../../../utils/weather-utils';
import './WeatherCardMain.scss';

const WeatherCardMain = ({ weather }: WeatherCardMainProps) => {

    return <div className='weather-card-main'>
        <div className='weather-card-main-today'>
            <img
                src={getWeatherIconUrl(weather.list[0].weather[0].icon)}
                alt=""
            />
            <h1>{ weather.list[0].main.temp.toFixed(0) }°</h1>
            <p>{ weather.list[0].weather[0].main }</p>
        </div>
        <div className='weather-card-main-projected'>
            { ProjectedWeatherItems(weather.list) }
        </div>
    </div>
}

const ProjectedWeatherItems = (weather: WeatherDataItem[]): React.ReactNode[] => {
    return weather.slice(1).map((weather, index) => (
        <div className='weather-card-main-projected-item' key={ index }>
            <div className='weather-card-main-projected-item-date'>
                <p>{ getTime(new Date(weather.dt * 1000)) }</p>
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