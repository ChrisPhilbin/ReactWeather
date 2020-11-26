import { combineReducers } from 'redux'
import currentWeatherReducer from './CurrentWeatherReducer'
import currentForecastReducer from './CurrentForecastReducer'

const rootReducer = combineReducers({
    currentWeather: currentWeatherReducer,
    currentForecast: currentForecastReducer
})

export default rootReducer