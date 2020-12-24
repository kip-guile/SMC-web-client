import React from 'react'
import { mount } from 'enzyme'
import SingleMovie from '../pages/SingleMovie'
import store from '../store/index'
import { Provider } from 'react-redux'
import LoadingModal from '../components/loadingModal'

let wrapped: any

let match = {
  params: {
    id: '12',
  },
}

beforeEach(() => {
  wrapped = mount(
    <Provider store={store}>
      <SingleMovie match={match} />
    </Provider>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('has an image and text for movie descriptions', () => {
  expect(wrapped.find('img').length).toEqual(1)
  expect(wrapped.find('p').length).toEqual(8)
})

it('has a loading modal', () => {
  expect(wrapped.find(LoadingModal).length).toEqual(1)
})
