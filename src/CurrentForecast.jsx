import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentWeeklyForecast } from './actions/CurrentForecastActions'

const CurrentForecast = () => {

    let dispatch = useDispatch()
    let loading  = useSelector(state => state.currentForecast.loading)
    let errors   = useSelector(state => state.currentForecast.hasErrors)
    let forecast = useSelector(state => state.currentForecast.forecast[0])

    useEffect(() => {
        dispatch(fetchCurrentWeeklyForecast())
    },[forecast, dispatch])

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
                <h3>Detailed Forecast</h3>
                {forecast.properties.periods.map( day => {
                    return (
                        <div className="day" key={day.number}>
                            <strong>{day.name}</strong> - 
                            {day.detailedForecast}<br />
                        </div>
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