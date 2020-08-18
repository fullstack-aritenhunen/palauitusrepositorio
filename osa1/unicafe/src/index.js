import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}
  </button>
)

const Statistics = (props) => {

  const {good, neutral, bad} = props
  const yhteensa = good + neutral + bad
  const positiivinen = ( 100 * good / yhteensa ) + ' %'
  const keskiarvo = (( good - bad ) / yhteensa )

  if (yhteensa === 0) {
    return (
      <p>
        No feedback given
      </p>
    )
  }

  return (
    <div>
      <table>
        <tbody>
        <tr><StatisticLine text="good" value={good}/></tr>
        <tr><StatisticLine text="neutral" value={neutral}/></tr>      
        <tr><StatisticLine text="bad" value={bad}/></tr>
        <tr><StatisticLine text="all" value={yhteensa}/></tr>
        <tr><StatisticLine text="average" value={keskiarvo}/></tr>
        <tr><StatisticLine text="positive" value={positiivinen}/></tr>
        </tbody>
      </table>    
    </div>
  )
}
 
const StatisticLine = (props) => {

  const {text, value} = props

  return (
    <>
      <td>{text}</td><td>{value}</td>
    </>
  )
    
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
   
  const hyva = () => {

    setGood(good + 1)

  }

  const neutraali = () => {
 
    setNeutral(neutral + 1)
  
  }

  const huono = () => {
  
    setBad(bad + 1)

  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={hyva} text="good" />
      <Button onClick={neutraali} text="neutral" />
      <Button onClick={huono} text="bad" />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

