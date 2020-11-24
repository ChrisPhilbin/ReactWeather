import * as actions from '../actions/CurrentWeatherActions'

export const initialState = {
    coordinates: ['0', '0'],
    currentConditions: {},
    currentForecast: {},
    loading: false,
    hasErrors: false
}

export default function currentWeatherReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_CURRENT_LOCATION:
            return { ...state, loading: true, hasErrors: false }
        case actions.GET_CURRENT_LOCATION_SUCCESS:
            return { ...state, loading: false, hasErrors: false, coordinates: action.payload }
        case actions.GET_CURRENT_LOCATION_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        case actions.GET_CURRENT_WEATHER:
            return { ...state, loading: true, hasErrors: false }
        case actions.GET_CURRENT_WEATHER_SUCCESS:
            return { ...state, loading: false, hasErrors: false, currentConditions: action.payload }
        case actions.GET_CURRENT_WEATHER_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        case actions.GET_CURRENT_WEEKLY_FORECAST:
            return { ...state, loading: true, hasErrors: false }
        case actions.GET_CURRENT_WEEKLY_FORECAST_SUCCESS:
            return { ...state, loading: false, hasErrors: false, currentForecast: action.payload }
        case actions.GET_CURRENT_WEEKLY_FORECAST_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        default:
            return { state }
    }
}