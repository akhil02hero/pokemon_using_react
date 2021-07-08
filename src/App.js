import React from 'react'
import Card from './Card'

export default function App(props) {
  const { name, age } = props;
  return (
    <div>
      <Card name={name} age={age} />
    </div>
  )
}
