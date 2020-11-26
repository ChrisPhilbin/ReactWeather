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
        dispatch(getCurrentWeeklyForecast())
        return(
            fetch('https://api.weather.gov/gridpoints/PHI/51,86/forecast')
            .then(response => response.json())
            .then(data => getCurrentWeeklyForecastSuccess(data))
            .catch( () => dispatch(getCurrentWeeklyForecastFailure()))
        )
    }
}