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