import * as actions from '../actions/CurrentForecastActions'

export const initialForecastState = {
    forecast: {},
    loading: false,
    hasErrors: false
}

export default function currentForecastReducer(state = initialForecastState, action) {
    switch (action.type) {
        case actions.GET_CURRENT_WEEKLY_FORECAST: {
            return {...state, loading: true, hasErrors: false }
        }
        case actions.GET_CURRENT_WEEKLY_FORECAST_SUCCESS: {
            return {...state, loading: false, hasErrors: false, forecast: action.payload }
        }
        case actions.GET_CURRENT_WEEKLY_FORECAST_FAILURE: {
            return {...state, loading: false, hasErrors: true }
        }
        default:
            return state
    }
}