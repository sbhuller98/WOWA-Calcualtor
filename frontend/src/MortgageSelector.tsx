import { useState } from 'react';
import NewMortgageDetails from './NewMortgageDetails';
import PaymentDisplay from './PaymentDisplay';
import PieChartComponent from './PieChartComponent'
import TransferTax from './TransferTax'

const MortgageSelector = (): JSX.Element => {
  const [mortgagePaymentAmount, updatePaymentAmount] = useState<number>(1000);
  const [homePrice, updatePrice] = useState<number>(1000);
  const [mortgageAmount, updateMortAmount] = useState<number>(1000)
  
 
  return (
    <>
      
      < NewMortgageDetails updateMonthlyPayment={updatePaymentAmount} updatePrice={updatePrice} updateMortAmount={updateMortAmount}/>
      < PaymentDisplay payment = {mortgagePaymentAmount} />
      <PieChartComponent />
      < TransferTax mortgageAmount={mortgageAmount} homePrice={homePrice}/>
    </>
    
  );
};

export default MortgageSelector;
