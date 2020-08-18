import React from 'react'

const Hae = ({ countries, showButtonHandler }) => {
 
    if (countries.length > 10) {
        return (<div>
            <p>Too many matches, specify another filter</p>
        </div>)
    } else if (countries.length < 10 && countries.length > 1){

        return (
            <div>
                {countries.map( (content) => (
                <div key = {content.name}>                       
                 <p>{content.name}</p>
                 <button onClick={showButtonHandler} value={content.name}>Show</button>
                 </div>
                ))}
            </div>
                )

    } else if (countries.length === 1) {
        
        return (
            <div>
                {countries.map((content) => (
                <div key = {content.name}>                       
                 <h2>{content.name}</h2>
                 <p>capital {content.capital}</p>
                 <p>population {content.population}</p>
                 <h3>Languages</h3>
                 <ul>
                    {content.languages.map(language => <li key={language.name}>{language.name}</li>)}
                 </ul>
                 <img src={content.flag} height="120px" alt="" />
                 </div>
                ))}
            </div>
                )
     
    } else{
        return(
            <div>

            </div>
        )
    }

}

export default Hae;