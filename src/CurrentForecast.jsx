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
    },[dispatch])

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
                <div className="container">
                    <div className="row">
                        {forecast.map( day => {
                            return (
                                <div className="col-sm-12 forecast-container" key={day.number}>
                                    <h4><strong>{day.name}</strong></h4>
                                    <p id="forecast-image"><img src={day.icon} alt={day.shortForecast} /></p>
                                    <p><strong>{day.temperature}&deg;F</strong></p>
                                    {day.detailedForecast}<br />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            null
        )
    }
}

export default CurrentForecast