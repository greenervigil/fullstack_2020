import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  
  return (
    <h1>{course}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      {props.parts.map(part => {
        return <Part part={part.name} number={part.exercises} />
      })}
    </>
  )
}

const Part = ({ part, number }) => {
  return (
    <p>
        {part} {number}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
  )
}

const App = () => {
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    }
  ]

  const course = 'Half Stack application development'
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
