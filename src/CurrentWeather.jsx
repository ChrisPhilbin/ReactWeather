import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentLatLon } from './actions/CurrentWeatherActions'

const CurrentWeather = () => {

    let dispatch = useDispatch()
    let loading             = useSelector(state => state.currentWeather.loading)
    let errors              = useSelector(state => state.currentWeather.hasErrors)
    let currentObservations = useSelector(state => state.currentWeather.currentConditions[0])

    useEffect(() => {
        dispatch(getCurrentLatLon())

    },[dispatch])

    if (loading) {
        return(
            <div>
                <strong>Loading... Please wait a moment</strong>
            </div>
        )
    } 
    
    if (errors) {
        return(
            <div>
                <strong>Something went wrong - please try again in a moment</strong>
            </div>
        )
    }

    if (currentObservations) {
        return(
            <>
            <div className="container">
                <div className="row">
                    <span><span className="main-temp">{Math.round(currentObservations.main.temp)}</span><span className="main-temp-super"> &deg;F</span></span>
                </div>

                <div className="row">
                    <div className="current-observations">
                        <h2><strong>Currently in {currentObservations.name}</strong></h2>
                        <i>Last updated: {new Date((currentObservations.dt + (currentObservations.timezone))).toLocaleTimeString("en-US")}</i><br />
                        <strong>Current obsersations:</strong> {currentObservations.weather[0].main}<br />
                        <strong>Current temperature:</strong> {Math.round(currentObservations.main.temp)}&deg;F<br />
                        <strong>Humidity:</strong> {currentObservations.main.humidity}<br />
                        <strong>Barometric pressure:</strong> {(currentObservations.main.pressure / 33.864).toFixed(2)} inches of mercury<br />
                        <strong>Wind speed:</strong> {Math.round(currentObservations.wind.speed)}mph<br />
                        <strong>Wind gust:</strong> {currentObservations.wind.gust?  Math.round(currentObservations.wind.gust)+'mph' : 'calm'}<br />
                    </div>
                </div>
            </div>
            </>
        )
    } else {
        return null
    }
}

export default CurrentWeather