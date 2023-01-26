const getWeatherIconUrl = (id: string): string => {
    return `http://openweathermap.org/img/wn/${ id }@2x.png`
}

const getUTCShiftedTime = (timeShiftInSeconds: number): string => {
    const now = new Date();
    const utcDate = new Date(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate(), 
        now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds() + timeShiftInSeconds, now.getUTCMilliseconds());

    return utcDate.getHours() + ':' + utcDate.getMinutes();
}

export { getWeatherIconUrl, getUTCShiftedTime };