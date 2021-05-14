interface Props {
  payment: number;
}

const PaymentDisplay = ({ payment }: Props): JSX.Element => {
  return (
    <div>
      <h1>Calculated Monthly Payment</h1>
      <h1>{payment}</h1>
    </div>
  );
};

export default PaymentDisplay;
