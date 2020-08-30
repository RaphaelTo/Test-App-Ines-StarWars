import React from 'react';
import { render } from '@testing-library/react';
import App from '../../../views/App/App';

describe('view App', () => {
  test('view App rendered', () => {
    const getApp = render(<App />);

    expect(getApp).toBeTruthy();
  });
});
