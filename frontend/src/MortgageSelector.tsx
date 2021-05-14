import { useState } from 'react';
import NewMortgageDetails from './NewMortgageDetails';
import PaymentDisplay from './PaymentDisplay';
import PieChartComponent from './PieChartComponent'
import TransferTax from './TransferTax'

const MortgageSelector = (): JSX.Element => {
  const [mortgageAmount, updateAmount] = useState<number>(1000);
  
 
  return (
    <>
      
      < NewMortgageDetails updateMonthlyPayment={updateAmount}/>
      < PaymentDisplay payment = {mortgageAmount} />
      <PieChartComponent />
      < TransferTax />
    </>
    
  );
};

export default MortgageSelector;
