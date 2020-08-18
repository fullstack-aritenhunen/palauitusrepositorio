import React from 'react'

const Saatiedot = ({ weather, saatietoja }) => {

    if (weather && saatietoja.length === 1) {
     
    return (
        <div>
            <h3>Weather in {saatietoja[0].capital}</h3>
            <p><b>Temperature: </b>{weather.temperature} celcius</p>
            <img src={weather.weather_icons} height="100px" alt="" />
            <p><b>Wind:</b> {weather.wind_speed} mph direction {weather.wind_dir}</p>
        </div>
           )

} else if(saatietoja.length === 1) {
 
    return(
     <p>ladataan säätietoja...</p>
    )

} else {
    return(
    <div>
    </div>
)
}

}

export default Saatiedot;