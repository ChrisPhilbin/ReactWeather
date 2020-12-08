import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCurrentWeatherByZip } from './actions/CurrentWeatherActions'

import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap'

const SearchCurrentWeather = () => {

    const dispatch = useDispatch()

    let [zip, setZip] = useState('')

    let onLocationSubmit = (zip) => {
        alert("clicked!")
        dispatch(fetchCurrentWeatherByZip(zip))
    }

    return(
        <div className="form-group">
            <label htmlFor="zip">Zip code</label>
            <input type="text" id="zip" className="form-control" value={zip} onChange={ (e) => setZip(e.target.value)}/>
            <Button onClick={ () => onLocationSubmit(zip)}>Search</Button>
        </div>
    )

}

export default SearchCurrentWeather