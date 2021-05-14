import { useEffect, useState } from 'react';
import SampleSelectField from './InputFields/SampleSelectField';

interface Props {
 homePrice: number;
 mortgageAmount: number;
}

const TransferTax = ({ homePrice, mortgageAmount }): JSX.Element => {
  const [currentProvince, changeProvince] = useState<string>('BC');
  const [currentTransferTax, updateTransferTax] = useState<number>(1000);

  const arr = [
    'BC',
    'AB',
    'SK',
    'MB',
    'ON',
    'QC',
    'NB',
    'NS',
    'NL',
    'PEI',
    'YT',
    'NT',
    'NU',
  ];

  const calculateOntarioTaxOutsideToronto = () => {
    if (homePrice <= 55000) {
      return 0.005 * homePrice;
    } else if (homePrice <= 250000) {
      return 275 + 0.01 * (homePrice - 55000);
    } else if (homePrice <= 400000) {
      return 275 + 1950 + 0.015 * (homePrice - 250000);
    } else if (homePrice <= 2000000) {
      return 275 + 1950 + 2250 + 0.02 * (homePrice - 400000);
    } else {
      return 275 + 1950 + 2250 + 2000 + 0.025 * (homePrice - 2000000);
    }
  };

  const calculateOntarioTaxInsideToronto = () => {
    return 2 * calculateOntarioTaxOutsideToronto();
  };

  const calculateBCTax = () => {
    console.log(homePrice)
    if (homePrice <= 200000) {
      return (0.01 * homePrice);
    } else if (homePrice <= 2000000) {
      return 2000 + 0.02 * (homePrice - 200000);
    } else if (homePrice <= 3000000) {
      return 2000 + 36000 + 0.03 * (homePrice - 2000000);
    } else {
      return 2000 + 36000 + 30000 + 0.05 * (homePrice - 3000000);
    }
  };

  const calculateMBTax = () => {
    if (homePrice <= 30000) {
      return 0;
    } else if (homePrice <= 90000) {
      return 0.005 * (homePrice - 30000);
    } else if (homePrice <= 150000) {
      return 300 + 0.01 * (homePrice - 900000);
    } else if (homePrice <= 200000) {
      return 300 + 600 + 0.015 * (homePrice - 150000);
    } else {
      return 300 + 600 + 750 + 0.02 * (homePrice - 200000);
    }
  };

  const calculateQCTax = () => {
    if (homePrice <= 51700) {
      return 0.005 * homePrice;
    } else if (homePrice <= 258600) {
      return 259 + 0.01 * (homePrice - 51700);
    } else {
      return 259 + 2069 + 0.015 * (homePrice - 258600);
    }
  };

  const calculateSKTax = () => {
    if (homePrice <= 525) {
      return 0;
    } else if (homePrice <= 8800) {
      return 25.97;
    } else {
      return 0.003 * homePrice;
    }
  };

  const calculateNBTax = () => {
    return 0.01 * homePrice;
  };

  const calculateNSTax = () => {
    const homePrice = 5000000;
    return 0.015 * homePrice;
  };

  const calculatePEITax = () => {
    const homePrice = 100000;
    return 0.01 * homePrice;
  };
  const calculateNLTax = () => {
    if (homePrice <= 500) {
      return 100;
    }
    return 0.004 * Math.ceil(homePrice - 500) + 100;
  };
  

  const calculateABTax = () => {
    return 100 + Math.ceil(homePrice / 5000) + Math.ceil(mortgageAmount / 5000);
  };

  useEffect(() => {
    switch (currentProvince) {
      case 'BC':
        return updateTransferTax(calculateBCTax());
      case 'AB':
        return updateTransferTax(calculateABTax());
      case 'SK':
        return updateTransferTax(calculateSKTax());
      case 'MB':
        return updateTransferTax(calculateMBTax());
      case 'ON':
        //calculateOntarioTaxInsideToronto()
        return updateTransferTax(calculateOntarioTaxOutsideToronto());
      case 'QC':
        return updateTransferTax(calculateQCTax());
      case 'NB':
        return updateTransferTax(calculateNBTax());
      case 'NS':
        return updateTransferTax(calculateNSTax());
      case 'NL':
        return updateTransferTax(calculateNLTax());
      case 'PEI':
        return updateTransferTax(calculatePEITax());
      default:
        return updateTransferTax(0)
    }
    
  }, [currentProvince, homePrice, mortgageAmount]);

  
  return (
    <>
      <SampleSelectField values={arr} updateTaxProvince={changeProvince} />
      <h1 className="m-3">{Math.round(currentTransferTax)}</h1>
    </>
  );
};

export default TransferTax;
