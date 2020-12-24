import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import { Route, Switch } from 'react-router-dom'

let wrapped: any

beforeEach(() => {
  wrapped = shallow(<App />)
})

it('Renders a switch component', () => {
  expect(wrapped.find(Switch).length).toEqual(1)
})

it('Renders two routes', () => {
  expect(wrapped.find(Route).length).toEqual(2)
})
