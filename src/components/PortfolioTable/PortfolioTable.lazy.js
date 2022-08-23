import React, { lazy, Suspense } from 'react';

const LazyPortfolioTable = lazy(() => import('./PortfolioTable'));

const PortfolioTable = props => (
  <Suspense fallback={null}>
    <LazyPortfolioTable {...props} />
  </Suspense>
);

export default PortfolioTable;
