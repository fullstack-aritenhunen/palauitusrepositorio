import React, { useState, useEffect } from "react";
import axios from "axios";
import Hae from "./components/hae";
import Saatiedot from "./components/saa";
import './index.css'

const avain = process.env.REACT_APP_API_KEY

function App() {
  const [countries, setCountries] = useState([]);
  const [results, setResults] = useState('');
  const [weather, setWeather] = useState('');
  const [kentta, setKentta] = useState('');

  const handleInputChange = (event) => {

    let result = countries.filter( (content) => {
        return (content.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1)
    })
    setResults(result);
    setKentta(event.target.value);

}

useEffect( () => {
  axios.get("https://restcountries.eu/rest/v2/all")
  .then( (response) => {
      setCountries(response.data);
  })
}, [] )

const saatiedotteet = () => {

  if (results.length === 1) {
   
    const params = {
      access_key: avain,
      query: results[0].capital
    }

    axios
      .get('http://api.weatherstack.com/current', { params })
      .then(response => {

        setWeather(response.data.current)
    
      })
  } else {

    setWeather('')

  }
}

useEffect(saatiedotteet, [results])

  return (
    <div>
    <div>
      find countries <input value={kentta} onChange={handleInputChange}/>
    </div>
    <Hae countries={results} showButtonHandler={handleInputChange}/>
    <Saatiedot weather={weather} saatietoja={results} /> 
    </div>
  );
}

export default App;