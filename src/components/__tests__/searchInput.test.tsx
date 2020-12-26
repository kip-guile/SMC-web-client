import React from 'react'
import { mount } from 'enzyme'
import store from '../../store/index'
import { Provider } from 'react-redux'
import SearchInput from '../searchInput'

let wrapped: any

const searchMovieDatabaseFunction = (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault()
}

beforeEach(() => {
  wrapped = mount(
    <Provider store={store}>
      <SearchInput
        setText={() => {}}
        text='new'
        searchMovieDatabaseFunction={searchMovieDatabaseFunction}
      />
    </Provider>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('has a form', () => {
  expect(wrapped.find('form').length).toEqual(1)
})
it('has a text area that users can type in', () => {
  expect(wrapped.find('input').prop('value')).toEqual('new')
})
it('displays a button', () => {
  expect(wrapped.find('button').length).toEqual(1)
})
