import React, { lazy, Suspense } from 'react';

const LazyCryptoAPI = lazy(() => import('./CryptoAPI'));

const CryptoAPI = props => (
  <Suspense fallback={null}>
    <LazyCryptoAPI {...props} />
  </Suspense>
);

export default CryptoAPI;
