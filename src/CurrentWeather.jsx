import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentLatLon } from './actions/CurrentWeatherActions'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    currentObservations: {
        padding: 10,
        margin: 10
    }
})

const CurrentWeather = () => {

    const classes = useStyles()

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
        document.title = "Current conditions in " + currentObservations.name
        
        return(
            <>
            <Container>
                <Paper className={classes.currentObservations} elevation={3}>

                    <Grid>
                        <h2><strong>Currently in {currentObservations.name}</strong></h2>
                        <i>Last updated: {new Date((currentObservations.dt + (currentObservations.timezone))).toLocaleTimeString("en-US")}</i><br />
                        <strong>Current obsersations:</strong> {currentObservations.weather[0].main}<br />
                        <strong>Current temperature:</strong> {Math.round(currentObservations.main.temp)}&deg;F<br />
                        <strong>Humidity:</strong> {currentObservations.main.humidity}<br />
                        <strong>Barometric pressure:</strong> {(currentObservations.main.pressure / 33.864).toFixed(2)} inches of mercury<br />
                        <strong>Wind speed:</strong> {Math.round(currentObservations.wind.speed)}mph<br />
                        <strong>Wind gust:</strong> {currentObservations.wind.gust?  Math.round(currentObservations.wind.gust)+'mph' : 'calm'}<br />
                    </Grid>

                    <div>                    
                        <img src="https://radblast.wunderground.com/cgi-bin/radar/WUNIDS_map?num=1&type=N0R&mapx=400&mapy=240&brand=wui&delay=15&frame=0&scale=1&transx=0&transy=0&severe=0&smooth=0&centerx=400&centery=240&station=DIX&rainsnow=0&lightning=0&noclutter=0&showlabels=1&showstorms=0&rand=26784725" alt="current radar" height="240" width="320" />
                    </div>
                </Paper>
            </Container>
            </>
        )
    } else {
        return null
    }
}

export default CurrentWeather