export const GET_CURRENT_WEEKLY_FORECAST         = "GET_CURRENT_WEEKLY_FORECAST"
export const GET_CURRENT_WEEKLY_FORECAST_SUCCESS = "GET_CURRENT_WEEKLY_FORECAST_SUCCESS"
export const GET_CURRENT_WEEKLY_FORECAST_FAILURE = "GET_CURRENT_WEEKLY_FORECAST_FAILURE"

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
        if (navigator.geolocation) {
            dispatch(getCurrentWeeklyForecast())
            let success = (position) => {

                let lat = position.coords.latitude.toFixed(4)
                let lon = position.coords.longitude.toFixed(4)

                fetch(`https://api.weather.gov/points/${lat},${lon}`)
                .then(response => response.json())
                .then(data =>
                    fetch(data.properties.forecast)
                    .then(response => response.json())
                    .then(data => dispatch(getCurrentWeeklyForecastSuccess(data.properties.periods)))
                )
                .catch( () => dispatch(getCurrentWeeklyForecastFailure()))
            }

            let fail = () => {
                dispatch(getCurrentWeeklyForecastFailure())
            }

            navigator.geolocation.getCurrentPosition(success, fail)
        } else {
            dispatch(getCurrentWeeklyForecastFailure())
        }
    }
}

export const fetchCurrentWeeklyForecastByZip = (zip) => {
    return (dispatch) => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.REACT_APP_GOOGLE_API}&components=postal_code:${zip}`)
        .then(response => response.json())
        .then(data => 
            fetch(`https://api.weather.gov/points/${data.results[0].geometry.location.lat},${data.results[0].geometry.location.lng}`)
            .then(response => response.json())
            .then(data =>
                fetch(data.properties.forecast)
                .then(response => response.json())
                .then(data => dispatch(getCurrentWeeklyForecastSuccess(data.properties.periods)))
            )
        )
    }
}
