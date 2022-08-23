import React from 'react';
import './NetWorth.css';

const NetWorth = ({totalNetWorth}) => (
  <div className="NetWorth" data-testid="NetWorth">
    <h3>Total Net Worth is {totalNetWorth}</h3>
  </div>
);

NetWorth.propTypes = {};

NetWorth.defaultProps = {};

export default NetWorth;
