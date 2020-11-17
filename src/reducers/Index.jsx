import { combineReducers } from 'redux'
import currentWeatherReducer from './CurrentWeatherReducer'

const rootReducer = combineReducers({
    currentWeather: currentWeatherReducer
})

export default rootReducer