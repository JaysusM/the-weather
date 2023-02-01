const getWeatherIconUrl = (id: string): string => {
    return `http://openweathermap.org/img/wn/${ id }@2x.png`
}

export { getWeatherIconUrl };