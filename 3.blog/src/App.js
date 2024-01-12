import React, {Component} from 'react';

const Welcome = (props) => {
  return (
    <h1>Hello {props.name} AKA {props.profession}</h1>
  )
}

export default Welcome;