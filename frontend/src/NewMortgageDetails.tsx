import { useEffect, useState } from 'react';
import SampleControlledNumberInput from './InputFields/SampleControlledNumberInput';
import PaymentDisplay from './PaymentDisplay';

interface Props {
  updateMonthlyPayment: (number) => void;
  updatePrice: (number) => void;
  updateMortAmount: (number) => void;
}

const NewMortgageDetails = ({ updateMonthlyPayment, updatePrice, updateMortAmount }): JSX.Element => {
  let mortgageInputFIelds;

  const [homePrice, updateHomePrice] = useState<number>(1000000);
  const [downPaymentVal, updateDownPaymentVal] = useState<number>(200000);
  const [downPaymentPercent, updateDownPaymentPercent] = useState<number>(20);
  const [interestRate, updateInterestRate] = useState<number>(6);
  const [term, updateTerm] = useState<number>(5);
  const [ammortization, updateAmmortization] = useState<number>(30);
  const [paymentFrequency, updatePaymentFrequency] = useState<number>(12);
  const [mortgageAmount, updateMortgageAmount] = useState<number>(100000);
  const [monthlyPayment, changeMonthlyPayemnt] = useState<number>(1000);
  const [newMortgage, updateNewMortgage] = useState<boolean>(true);
  const [renderInputFields, updateRenderFields] = useState(mortgageInputFIelds);

  function updateToNew() {
    updateNewMortgage(true);
  }

  function updateToRefinance() {
    updateNewMortgage(false);
  }

  function updateToMonthly() {
    updatePaymentFrequency(12);
  }
  function updateToBiWeekly() {
    updatePaymentFrequency(26);
  }

  useEffect(() => {
    const monthlyInterest = interestRate / 100 / paymentFrequency;
    const numberOfPayments = ammortization * paymentFrequency;
    const innerTerm = (1 + monthlyInterest) ** numberOfPayments;
    const mortgagePayment =
      (mortgageAmount * (monthlyInterest * innerTerm)) / (innerTerm - 1);
    changeMonthlyPayemnt(mortgagePayment);
  }, [interestRate, ammortization, paymentFrequency, mortgageAmount]);

  useEffect(() => {
    updateMonthlyPayment(monthlyPayment);
  }, [monthlyPayment]);

  useEffect(() => {
    updateMortgageAmount(homePrice - downPaymentVal);
    updateMortAmount(mortgageAmount)
    updatePrice(homePrice)
  }, [homePrice, downPaymentVal]);

  useEffect(() => {
    updateMortgageAmount(homePrice - downPaymentVal);
  }, [homePrice, downPaymentVal]);

  return (
    <>
      <div>
        <button
          onClick={updateToNew}
          className="bg-blue-400 border-2 hover:border-gray-700 p-2 m-1 rounded-md text-white"
          value="newMort"
        >
          New Mortgage
        </button>
        <button
          onClick={updateToRefinance}
          className="bg-blue-400 border-2 hover:border-black p-2 m-1 rounded-md text-white"
        >
          Renewal/Refinance
        </button>
      </div>

      {newMortgage && (
        <>
          <div>
            <p>Home Price</p>
            <SampleControlledNumberInput
              value={homePrice}
              onChange={updateHomePrice}
              placeholder=""
              initialHolder="$"
            />
          </div>
          <div>
            <p>Down Payment</p>
            <SampleControlledNumberInput
              value={downPaymentVal}
              onChange={updateDownPaymentVal}
              placeholder=""
              initialHolder="$"
            />
          </div>
          <div>
            <p>Down Payment Percent</p>
            <SampleControlledNumberInput
              value={downPaymentPercent}
              onChange={updateDownPaymentPercent}
              placeholder="%"
              initialHolder=""
            />
          </div>
        </>
      )}
      {!newMortgage && (
        <div>
          <p>Mortgage Amount</p>
          <SampleControlledNumberInput
            value={mortgageAmount}
            onChange={updateMortgageAmount}
            placeholder=""
            initialHolder="$"
          />
        </div>
      )}
      <div>
        <p>Interest Rate</p>
        <SampleControlledNumberInput
          value={interestRate}
          onChange={updateInterestRate}
          placeholder="%"
          initialHolder=""
        />
      </div>
      <div>
        <p>Term</p>
        <SampleControlledNumberInput
          value={term}
          onChange={updateTerm}
          placeholder="Years"
          initialHolder=""
        />
      </div>
      <div>
        <p>Ammortization</p>
        <SampleControlledNumberInput
          value={ammortization}
          onChange={updateAmmortization}
          placeholder="Years"
          initialHolder=""
        />
      </div>
      <div>
        <h1>Payment Frequency</h1>
        <button
          onClick={updateToMonthly}
          className="bg-blue-400 border-2 hover:border-gray-700 p-2 m-1 rounded-md text-white"
          value="newMort"
        >
          Monthly
        </button>
        <button
          onClick={updateToBiWeekly}
          className="bg-blue-400 border-2 hover:border-black p-2 m-1 rounded-md text-white"
        >
          Bi-Weekly
        </button>
      </div>
    </>
  );
};

export default NewMortgageDetails;
