import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NetWorth from './NetWorth';

describe('<NetWorth />', () => {
  test('it should mount', () => {
    render(<NetWorth />);
    
    const netWorth = screen.getByTestId('NetWorth');

    expect(netWorth).toBeInTheDocument();
  });
});