import * as actions from '../actions/CurrentWeatherActions'

export const initialWeatherState = {
    coordinates: ['0', '0'],
    currentConditions: [],
    loading: false,
    hasErrors: false
}

export default function currentWeatherReducer(state = initialWeatherState, action) {
    switch (action.type) {
        case actions.GET_CURRENT_LOCATION:
            return {...state, loading: true }
        case actions.GET_CURRENT_LOCATION_SUCCESS:
            return { ...state, loading: false, coordinates: action.payload }
        case actions.GET_CURRENT_LOCATION_FAILURE:
            return {...state, loading: false, hasErrors: true }
        case actions.GET_CURRENT_WEATHER:
            return { ...state, loading: true }
        case actions.GET_CURRENT_WEATHER_SUCCESS:
            return { ...state, loading: false, hasErrors: false, currentConditions: [...state.currentConditions, action.payload] }
        case actions.GET_CURRENT_WEATHER_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        default:
            return state
    }
}