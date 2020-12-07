import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Button from 'react-bootstrap'
import InputGroup from 'react-bootstrap'

const searchCurrentWeather = () => {

    const dispatch = useDispatch()

    [zip, setZip] = useState('')

    onLocationSubmit = (zip) => {
        dispatch(fetchCurrentWeatherByZip(zip))
    }

    return(
        <div className="form-group">
            <label htmlFor="zip">Zip code</label>
            <input type="text" id="zip" className="form-control" onChange={ (e) => setZip(e.target.value)}/>
            <Button onClick={onLocationSubmit(zip)}>Search</Button>
        </div>
    )

}

export default searchCurrentWeather