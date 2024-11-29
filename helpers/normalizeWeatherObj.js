
function formatTimeStringToHour(str) {
    let hour = str.split(" ")[1];
    hour = Number(hour.split(":")[0]);
    return hour;
}

function getNext5Hours(forecast, localTime) {
    let currentHour = formatTimeStringToHour(localTime);
    let output = forecast.hour.filter((hour) => {
        let forecastHour = formatTimeStringToHour(hour.time);
        if (forecastHour >= currentHour - 2 && forecastHour <= currentHour + 2) {
            return true;
        }
        return false;
    });
    return output.map((hour) => ({
        time: hour.time,
        temp: hour.temp_c
    }));
}

const normalizeWeather = (weather) => {
    return ({
        location: {
            city: weather.location.name,
            country: weather.location.country,
            localTime: weather.location.localtime,
            latitude: weather.location.lat,
            longitude: weather.location.lon
        },
        current: {
            temperature: weather.current.temp_c,
            condition: weather.current.condition.text,
            precipitation: weather.current.precip_mm,
            humidity: weather.current.humidity,
            wind: weather.current.wind_kph,
        },
        forecast: getNext5Hours(weather.forecast.forecastday[0], weather.location.localtime)
    });
};

module.exports = normalizeWeather;