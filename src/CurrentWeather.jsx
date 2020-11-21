import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentLatLon } from './actions/CurrentWeatherActions'

const CurrentWeather = () => {

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrentLatLon())
    }, [])

    let loading             = useSelector(state => state.currentWeather.loading)
    let errors              = useSelector(state => state.currentWeather.hasErrors)
    let currentObservations = useSelector(state => state.currentWeather.currentConditions)

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

    if (!currentObservations) {
        return null
    } else {
        return(
        <div>
            <h2><strong>Currently in {currentObservations.name}</strong></h2>
            <strong>Current temperature:</strong> {Math.round(currentObservations.main.temp)}
        </div>
        )
    }
}

export default CurrentWeather