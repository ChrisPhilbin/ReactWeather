import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchCurrentWeeklyForecast from './actions/CurrentForecastActions'

const CurrentForecast = () => {

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCurrentWeeklyForecast())
    }, [])

    let loading  = useSelector(state => state.CurrentForecast.loading)
    let errors   = useSelector(state => state.CurrentForecast.hasErrors)
    let forecast = useSelector(state => state.CurrentForecast.forecast)

    return(
        <div>
            Current Forecast Component
        </div>
    )
}

export default CurrentForecast