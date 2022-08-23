import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PortfolioTable from './PortfolioTable';

describe('<PortfolioTable />', () => {
  test('it should mount', () => {
    render(<PortfolioTable />);
    
    const portfolioTable = screen.getByTestId('PortfolioTable');

    expect(portfolioTable).toBeInTheDocument();
  });
});