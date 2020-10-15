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
      <Part part={props.part1.name} number={props.part1.exercises} />
      <Part part={props.part2.name} number={props.part2.exercises} />
      <Part part={props.part3.name} number={props.part3.exercises} />
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
    <p>Number of exercises {props.num1 + props.num2 + props.num3}</p>
  )
}

const App = () => {
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  }
  const course = 'Half Stack application development'
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total num1={part1.exercises} num2={part2.exercises} num3={part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
