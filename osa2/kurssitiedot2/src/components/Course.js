import React from 'react'

const Total = ({ parts }) => (
  <p>
    <b>
      Total of { parts.reduce( (sum, part) => (
        sum + part.exercises
      ), 0) } exercises
    </b>
  </p>
)

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
)

const Content = ({ parts }) => (
  <div>
    { parts.map( part =>
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    ) }
  </div>
)

const Header = (props) => {
  return (
    <h2>{props.course}</h2>
  )
}

const Course = ({ course }) => {

  return (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} /> 
    <Total parts={course.parts} />
  </div>
  )
}

export default Course