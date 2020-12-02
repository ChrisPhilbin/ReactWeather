import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchCurrentWeeklyForecast } from './actions/CurrentForecastActions'
import { getCurrentLatLon } from './actions/CurrentWeatherActions'


import CurrentWeather from './CurrentWeather'
import CurrentForecast from './CurrentForecast'

const WeatherIndex = () => {

    // let dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchCurrentWeeklyForecast())
    //     dispatch(getCurrentLatLon())
    // }, [dispatch])


    return(
        <div>
            <CurrentWeather />
            <CurrentForecast />
        </div>
    )
}

export default WeatherIndex