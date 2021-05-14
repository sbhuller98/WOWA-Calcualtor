interface Props {
    payment: number;
    term: number;
  }
  
  const PieChart = ({ payment }: Props): JSX.Element => {
    const calculatePrinciple = () => {
        
    }
    return (
      <div>
        <h1>Calculated Monthly Payment</h1>
        <h1>{payment}</h1>
      </div>
    );
  };
  
  export default PaymentDisplay;