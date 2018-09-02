import React from 'react';
import { render, within } from './helpers/testing';

import App from './App';

describe('App landing page', () => {
  it('should render ', () => {
    const { getByTestId } = render(<App />);
    const target = within(getByTestId('main-div'));
    console.log(target);
  });
});
