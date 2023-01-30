import Input from '../../ui/Input/Input';
import './CitySelector.scss';

const CitySelector = ({ onCityChange }: CitySelectorProps) => {

    return <div className="city-selector-container">
        <Input onSearch={ onCityChange } placeholder="Search by city name"></Input>
    </div>;

}

export type CitySelectorProps = {
    onCityChange: (cityName: string) => void
}

export default CitySelector;