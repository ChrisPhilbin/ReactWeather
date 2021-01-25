import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchCurrentWeeklyForecast } from './actions/CurrentForecastActions'
import { getCurrentLatLon } from './actions/CurrentWeatherActions'


import CurrentWeather       from './CurrentWeather'
import CurrentForecast      from './CurrentForecast'
import SearchCurrentWeather from './SearchCurrentWeather'

const WeatherIndex = () => {

    return(
        <div>
            <CurrentWeather />
            <SearchCurrentWeather />
            <CurrentForecast />
        </div>
    )
}

export default WeatherIndex