import * as actions from '../actions/CurrentWeatherActions'

export const initialWeatherState = {
    coordinates: ['0', '0'],
    currentConditions: {},
    currentForecast: {},
    loading: false,
    hasErrors: false
}

export default function currentWeatherReducer(state = initialWeatherState, action) {
    switch (action.type) {
        case actions.GET_CURRENT_LOCATION:
            return Object.assign( {}, state, { loading: true, hasErrors: false })
        case actions.GET_CURRENT_LOCATION_SUCCESS:
            return Object.assign( {}, state, { loading: false, hasErrors: false, coordinates: action.payload })
        case actions.GET_CURRENT_LOCATION_FAILURE:
            return Object.assign( {}, state, { loading: false, hasErrors: true })
        case actions.GET_CURRENT_WEATHER:
            return Object.assign( {}, state, { loading: true, hasErrors: false })
        case actions.GET_CURRENT_WEATHER_SUCCESS:
            return Object.assign( {}. state, {loading: false, hasErrors: false, currentConditions: action.payload })
        case actions.GET_CURRENT_WEATHER_FAILURE:
            return Object.assign( {}, state, { loading: false, hasErrors: true })
        default:
            return { state }
    }
}