import React from 'react';
import { render, within, renderWithRedux } from './helpers/testing';

import App from './App';

describe('App landing page', () => {
  it('should set Berlin as default city', () => {
    const { getByText } = renderWithRedux(<App />);
    expect(getByText('Berlin')).toBeInTheDocument();
  })
});
