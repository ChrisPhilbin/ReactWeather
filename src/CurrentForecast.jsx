import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentWeeklyForecast } from './actions/CurrentForecastActions'

const CurrentForecast = () => {

    // let dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchCurrentWeeklyForecast())
    // }, [])

    let loading  = useSelector(state => state.currentForecast.loading)
    let errors   = useSelector(state => state.currentForecast.hasErrors)
    let forecast = useSelector(state => state.currentForecast.forecast[0])

    if (loading) {
        return(
            <div>
                Current forecast data is still loading... please wait...
            </div>
        )
    }

    if (errors) {
        return(
            <div>
                Something went wrong loading the forecast data... please try again in a moment...
            </div>
        )
    }

    if (forecast) {
        return (
            <div>
                {forecast.properties.periods.map( day => {
                    return (
                        <>
                        <strong>{day.name}</strong><br />
                        {day.detailedForecast}<br />
                        </>
                    )
                })}
            </div>
        )
    } else {
        return(
            null
        )
    }
}

export default CurrentForecast