export const getUTCShiftedTime = (timeShiftInSeconds: number, now = new Date()): string => {
    const utcDate = new Date(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate(), 
        now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds() + timeShiftInSeconds, now.getUTCMilliseconds());

    return ('0' + utcDate.getHours()).slice(-2) + ':' + ('0' + utcDate.getMinutes()).slice(-2);
}
  