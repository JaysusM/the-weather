import { useRef } from 'react';

const CitySelector = ({ onCityChange }: CitySelectorProps) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const onSubmit = (): void => {
        if (!inputRef.current)
            throw Error('Something wrong happened while changing city. Please, try again.');
        onCityChange(inputRef.current.value);
    }

    return <div className="city-selector-container">
        <input type="text" ref={inputRef}></input>
        <button onClick={onSubmit}>Change City</button>
    </div>;

}

export type CitySelectorProps = {
    onCityChange: (cityName: string) => void
}

export default CitySelector;