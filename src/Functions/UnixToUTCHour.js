function UnixToUTCHour(unix){
    try{
        if (unix === undefined || unix === '') throw 'Invalid value';

        let utc = new Date(unix * 1000);
        let hours = utc.getHours();
        let minutes = utc.getMinutes();
    
        return `${hours}:${minutes}`;
    }catch(e){
        return e
    }
}

export default UnixToUTCHour;