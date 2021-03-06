import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentWeeklyForecast } from './actions/CurrentForecastActions'
import Button from 'react-bootstrap/Button'

const CurrentForecast = () => {

    let dispatch = useDispatch()
    let loading  = useSelector(state => state.currentForecast.loading)
    let errors   = useSelector(state => state.currentForecast.hasErrors)
    let forecast = useSelector(state => state.currentForecast.forecast[0])

    useEffect(() => {
        dispatch(fetchCurrentWeeklyForecast())
    },[dispatch])

    let tryAgainButton = (
        <div className="try-again-button">
            <Button onClick={ () => dispatch(fetchCurrentWeeklyForecast())}>
                Try again...
            </Button>
        </div>
    )

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
                Something went wrong loading the forecast data... please try again in a moment... <br />
                {tryAgainButton}
            </div>
        )
    }

    if (forecast) {
        return (
            <div>
                <div className="container">
                    {forecast.map( day => {
                        return (
                            <div className="row">
                                <div className="col-sm-6 forecast-container" key={day.number}>
                                    <h4><strong>{day.name}</strong></h4>
                                    <p id="forecast-image"><img src={day.icon} alt={day.shortForecast} /></p>
                                    <p><strong>{day.temperature}&deg;F</strong></p>
                                    {day.detailedForecast}<br />
                                </div>
                            </div>
                        )
                    })}
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