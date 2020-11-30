import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import WeatherIndex from '../WeatherIndex'


const Routes = () => {

    return(
        <Router>
            <Switch>
                <Route path="/" exact component={WeatherIndex} />
            </Switch>
        </Router>
    )
}

export default Routes