import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CurrentWeather from '../CurrentWeather'


const Routes = () => {

    return(
        <Router>
            <Switch>
                <Route path="/" exact component={CurrentWeather} />
            </Switch>
        </Router>
    )
}

export default Routes