import { useState } from 'react';
import NewMortgageDetails from './NewMortgageDetails';
import PaymentDisplay from './PaymentDisplay';

const MortgageSelector = (): JSX.Element => {
  const [mortgageAmount, updateAmount] = useState<number>(1000);

 
  return (
    <>
      
      < NewMortgageDetails updateMonthlyPayment={updateAmount}/>
      < PaymentDisplay payment = {mortgageAmount} />
    </>
    
  );
};

export default MortgageSelector;
