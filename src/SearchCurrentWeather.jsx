import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCurrentWeatherByZip } from './actions/CurrentWeatherActions'
import { fetchCurrentWeeklyForecastByZip} from './actions/CurrentForecastActions'

import Button from 'react-bootstrap/Button'

const SearchCurrentWeather = () => {

    const dispatch = useDispatch()

    let [zip, setZip] = useState('')

    let onLocationSubmit = (zip) => {
        dispatch(fetchCurrentWeatherByZip(zip))
        dispatch(fetchCurrentWeeklyForecastByZip(zip))
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="zip">Zip code</label>
                        <input type="text" id="zip" className="form-control" value={zip} onChange={ (e) => setZip(e.target.value)}/>
                        <Button onClick={ () => onLocationSubmit(zip)}>Search</Button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SearchCurrentWeather