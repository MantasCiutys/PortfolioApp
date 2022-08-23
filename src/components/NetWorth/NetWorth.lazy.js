import React, { lazy, Suspense } from 'react';

const LazyNetWorth = lazy(() => import('./NetWorth'));

const NetWorth = props => (
  <Suspense fallback={null}>
    <LazyNetWorth {...props} />
  </Suspense>
);

export default NetWorth;
