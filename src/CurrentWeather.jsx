import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentLatLon, fetchCurrentWeatherByLatLon } from './actions/CurrentWeatherActions'

const CurrentWeather = () => {

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrentLatLon())
    }, [])
    let coordinates = useSelector(state => state.currentWeather.coordinates)
    // let latitude = useSelector(state => state.currentWeather.coordinates.0)
    // let longitude = useSelector(state => state.currentWeather.coordinates[1])
    let showCoordinates

    if (coordinates) {
        console.log(coordinates, "SHOWING COORDINATES")
        dispatch(fetchCurrentWeatherByLatLon(coordinates[0], coordinates[1]))

        showCoordinates = (
            <div>
                <strong>latitude: </strong>{coordinates[0]}<br />
                <strong>longitude: </strong>{coordinates[1]} 
            </div>
        )
    }

    return(
        <>
            {showCoordinates}
        </>
    )
}

export default CurrentWeather