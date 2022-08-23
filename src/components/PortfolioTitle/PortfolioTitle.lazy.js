import React, { lazy, Suspense } from 'react';

const LazyPortfolioTitle = lazy(() => import('./PortfolioTitle'));

const PortfolioTitle = props => (
  <Suspense fallback={null}>
    <LazyPortfolioTitle {...props} />
  </Suspense>
);

export default PortfolioTitle;
