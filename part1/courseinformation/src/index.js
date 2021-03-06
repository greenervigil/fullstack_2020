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
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
