
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState((new Array(props.anecdotes.length)).fill(0))
  const eniten = points.indexOf(Math.max(...points));

  const seuraava = () => {

    setSelected((Math.floor((Math.random() * 6))))

  }

  const aanesta = () => {
    
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
   
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{props.anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <button onClick={aanesta}>vote
      </button>
      <button onClick={seuraava}>next anecdote
      </button>
      <h1>Anecdote with the most votes</h1>
      <div>{props.anecdotes[eniten]}</div>
      <div>has {points[eniten]} votes</div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)