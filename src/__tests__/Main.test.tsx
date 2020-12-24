import React from 'react'
import { mount } from 'enzyme'
import Main from '../pages/Main'
import store from '../store/index'
import { Provider } from 'react-redux'
import SearchInput from '../components/searchInput'
import LoadingModal from '../components/loadingModal'
import Nominations from '../components/nominations'
import Results from '../components/results'

let wrapped: any

beforeEach(() => {
  wrapped = mount(
    <Provider store={store}>
      <Main />
    </Provider>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('has a text area seacrch input', () => {
  expect(wrapped.find(SearchInput).length).toEqual(1)
})

it('has a loading modal', () => {
  expect(wrapped.find(LoadingModal).length).toEqual(1)
})

it('displays nominations', () => {
  expect(wrapped.find(Nominations).length).toEqual(1)
})

it('displays results from imdb', () => {
  expect(wrapped.find(Results).length).toEqual(1)
})
