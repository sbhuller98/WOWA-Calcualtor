import SampleSelectField from './InputFields/SampleSelectField'

//interface Props {
// homePrice: number;

//}

const TransferTax = ({ homePrice }): JSX.Element => {
  const arr = ['BC', 'AB', 'SK', 'MB', 'ON','QC','NB', 'NS', 'NL', 'PEI', 'YT', 'NT', 'NU']

  const calculateOntarioTaxOutsideToronto = () => {
    if (homePrice <= 55000) {
      return (0.005 * homePrice)
    } else if (homePrice <= 250000) {
      return (275 + (0.01 * (homePrice - 55000)))
    } else if (homePrice <= 400000) {
      return (275 + 1950 + (0.015 * (homePrice - 250000)))
    } else if (homePrice <= 2000000) {
      return (275 + 1950 + 2250 + (0.02 * (homePrice - 400000)))
    } else {
      return (275 + 1950 + 2250 + 2000 + (0.025 * (homePrice - 2000000)))
    }
  }

  const calculateOntarioTaxInsideToronto = () => {
    return (2 * calculateOntarioTaxOutsideToronto())
  }

  const calculateBCTax = () => {
    if (homePrice <= 200000) {
      return (0.01 * homePrice)
    } else if (homePrice <= 2000000) {
      return (2000 + (0.02 * (homePrice - 200000)))
    } else if (homePrice <= 3000000) {
      return (2000 + 36000 + (0.03 * (homePrice - 2000000)))
    } else {
      return (2000 + 36000 + 30000 + (0.05 * (homePrice - 3000000)))
    }
  }

  const calculateMBTax = () => {
    if (homePrice <= 30000) {
      return 0
    } else if (homePrice <= 90000) {
      return (0.005 * (homePrice - 30000))
    } else if (homePrice <= 150000) {
      return (300 + (0.01 * (homePrice - 900000)))
    } else if (homePrice <= 200000) {
        return (300 + 600 + (0.015 * (homePrice - 150000)))
    } else {
      return (300 + 600 + 750 + (0.02 * (homePrice - 200000)))
    }
  }

  const calculateQCTax = () => {
    const homePrice = 5000000
    if (homePrice <= 51700) {
      return (0.005 * homePrice)
    } else if (homePrice <= 258600) {
      return (259 + (0.01 * (homePrice - 51700)))
    } else {
      return (259 + 2069 + (0.015 * (homePrice - 258600)))
    } 
  }

  


  console.log(calculateQCTax())

  return < SampleSelectField values = {arr}/>
};

export default TransferTax;
