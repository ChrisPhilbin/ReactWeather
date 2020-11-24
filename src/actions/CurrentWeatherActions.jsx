export const GET_CURRENT_WEATHER                 = "GET_CURRENT_WEATHER"
export const GET_CURRENT_WEATHER_SUCCESS         = "GET_CURRENT_WEATHER_SUCCESS"
export const GET_CURRENT_WEATHER_FAILURE         = "GET_CURRENT_WEATHER_FAILURE"
export const GET_CURRENT_LOCATION                = "GET_CURRENT_LOCATION"
export const GET_CURRENT_LOCATION_SUCCESS        = "GET_CURRENT_LOCATION_SUCCESS"
export const GET_CURRENT_LOCATION_FAILURE        = "GET_CURRENT_LOCATION_FAILURE"
export const GET_CURRENT_WEEKLY_FORECAST         = "GET_CURRENT_WEEKLY_FORECAST"
export const GET_CURRENT_WEEKLY_FORECAST_SUCCESS = "GET_CURRENT_WEEKLY_FORECAST_SUCCESS"
export const GET_CURRENT_WEEKLY_FORECAST_FAILURE = "GET_CURRENT_WEEKLY_FORECAST_FAILURE"

export const getCurrentWeather = () => (
    { type: GET_CURRENT_WEATHER }
)

export const getCurrentWeatherSuccess = (observations) => (
    { type: GET_CURRENT_WEATHER_SUCCESS, payload: observations }
)

export const getCurrentWeatherFailure = () => (
    { type: GET_CURRENT_WEATHER_FAILURE }
)

export const fetchCurrentWeatherByZip = (zip) => {
    return (dispatch) => {
        dispatch(getCurrentWeather())
            fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${process.env.REACT_APP_OPEN_WEATHER_API}`)
            .then(response => response.json())
            .then(data => dispatch(getCurrentWeatherSuccess(data)))
            .catch( () => dispatch(getCurrentWeatherFailure()))

    }
}

export const fetchCurrentWeatherByLatLon = (coords) => {
    return (dispatch) => {
        dispatch(getCurrentWeather())
        return(
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&units=imperial&appid=${process.env.REACT_APP_OPEN_WEATHER_API}`)
            .then(response => response.json())
            .then(data => dispatch(getCurrentWeatherSuccess(data)))
            .catch( () => dispatch(getCurrentWeatherFailure()))
        )
    }
}

export const getCurrentLocation = () => (
    { type: GET_CURRENT_LOCATION }
)

export const getCurrentLocationSuccess = (coordinates) => (
    { type: GET_CURRENT_LOCATION_SUCCESS, payload: coordinates }
)

export const getCurrentLocationFailure = () => (
    { type: GET_CURRENT_LOCATION_FAILURE }
)

export const getCurrentLatLon = () => {
    return (dispatch) => {
        if (navigator.geolocation) {
            dispatch(getCurrentLocation())
            let success = (position) => {
                console.log(position)
                let coords = [
                    position.coords.latitude.toFixed(4),
                    position.coords.longitude.toFixed(4)
                ]
                dispatch(getCurrentLocationSuccess(coords))
                dispatch(fetchCurrentWeatherByLatLon(coords))
            }

            let fail = () => {
                dispatch(getCurrentLocationFailure())
            }

            navigator.geolocation.getCurrentPosition(success, fail)
        } else {
            dispatch(getCurrentLocationFailure())
        }
    }
}

export const getCurrentWeeklyForecast = () => (
    { type: GET_CURRENT_WEEKLY_FORECAST }
)

export const getCurrentWeeklyForecastSuccess = (forecast) => (
    { type: GET_CURRENT_WEEKLY_FORECAST_SUCCESS, payload: forecast}
)

export const getCurrentWeeklyForecastFailure = () => (
    { type: GET_CURRENT_WEEKLY_FORECAST_FAILURE }
)

export const fetchCurrentWeeklyForecast = () => {
    return (dispatch) => {
        dispatch(getCurrentWeeklyForecast())
        return(
            fetch('https://api.weather.gov/gridpoints/PHI/51,86/forecast')
            .then(response => response.json())
            .then(data => getCurrentWeeklyForecastSuccess(data))
            .catch( () => dispatch(getCurrentWeeklyForecastFailure()))
        )
    }
}