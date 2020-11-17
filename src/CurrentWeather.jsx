import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentLatLon } from './actions/CurrentWeatherActions'

const CurrentWeather = () => {

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrentLatLon())
    })

    let latitude = useSelector(state => state.currentWeather.coordinates[0])
    let longitude = useSelector(state => state.currentWeather.coordinates[1])
    // let currentConditions = useSelector(state => state.currentWeather.currentConditions)


    return(
        <>
        <strong>latitude: </strong>{latitude}<br />
        <strong>longitude: </strong>{longitude}
        </>
    )
}

export default CurrentWeather