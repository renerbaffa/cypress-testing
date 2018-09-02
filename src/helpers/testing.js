import React from 'react'
import { fireEvent, render, wait, within } from 'react-testing-library';
import store from '../store';
// import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {ThemeProvider} from 'styled-components'
import configureStore from '../store';

// const middlewares = [thunk]
// const mockStore = configureStore(middlewares)

const renderWithRedux = (
  ui,
  {initialState = {}, store = configureStore(initialState)} = {},
) => {
  const renderedUi = render(
    <Provider store={store}>
      {ui}
    </Provider>
  );

  return {
    ...renderedUi,
    store,
  };
}

export { fireEvent, render, wait, within, renderWithRedux };
