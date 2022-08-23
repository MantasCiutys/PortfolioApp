import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CryptoAPI from './CryptoAPI';

describe('<CryptoAPI />', () => {
  test('it should mount', () => {
    render(<CryptoAPI />);
    
    const cryptoApi = screen.getByTestId('CryptoAPI');

    expect(cryptoApi).toBeInTheDocument();
  });
});