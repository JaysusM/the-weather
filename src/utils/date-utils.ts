export const getTime = (date: Date): string => {
    return ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
}

export const getUTCShiftedTime = (timeShiftInSeconds: number): string => {
    const now = new Date();
    const utcDate = new Date(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate(), 
        now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds() + timeShiftInSeconds, now.getUTCMilliseconds());

    return utcDate.getHours() + ':' + ('0' + utcDate.getMinutes()).slice(-2);
}
  