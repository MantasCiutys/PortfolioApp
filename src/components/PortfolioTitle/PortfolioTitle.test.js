import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PortfolioTitle from './PortfolioTitle';

describe('<PortfolioTitle />', () => {
  test('it should mount', () => {
    render(<PortfolioTitle />);
    
    const portfolioTitle = screen.getByTestId('PortfolioTitle');

    expect(portfolioTitle).toBeInTheDocument();
  });
});