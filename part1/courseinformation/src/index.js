import React from 'react';
import ReactDOM from 'react-dom';


const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

const Header = ({ course }) => {
  
  return (
    <h1>{course}</h1>
  )
}

const Content = () => {
  return (
    <>
      <Part part={part1} number={exercises1} />
      <Part part={part2} number={exercises2} />
      <Part part={part3} number={exercises3} />
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

const Total = ({ total }) => {
  return (
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
