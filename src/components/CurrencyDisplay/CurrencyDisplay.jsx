import React from 'react';

const CurrencyDisplay = ({ amount }) => {
  const formattedAmount = amount.toLocaleString(undefined, {
    style: 'currency',
    currency: 'INR',  // Change to the currency you need, like 'EUR' or 'GBP'
  });

  return <span>{formattedAmount}</span>;
};

export default CurrencyDisplay;