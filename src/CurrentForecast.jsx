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
                <div className="container">
                    <div className="row">
                        {forecast.properties.periods.map( day => {
                            return (
                                <div className="col-sm-2" key={day.number}>
                                    <p class="period-name"><strong>{day.name}</strong></p><br /><br />
                                    <p><img src={day.icon} alt={day.shortForecast} /></p>
                                    <p><strong>{day.temperature}&deg;F</strong></p>
                                    {day.shortForecast}<br />
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