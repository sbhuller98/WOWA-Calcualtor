import React, { useMemo, useState } from 'react';

interface Props {
  values: string[];
  updateTaxProvince: () => void;
}

const SampleSelectField = ({ values, updateTaxProvince }): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>();

  const options = useMemo(
    () => values.map((i) => ({ value: i, label: i })),
    []
  );

  return (
    <select
      className="border text-lg shadow bg-white border-gray-300 p-2 rounded-md"
      style={{ minWidth: '240px' }}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        setInputValue(e.target.value);
        updateTaxProvince(e.target.value);
      }}
      value={inputValue}
    >
      {options.map(({ value, label }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default SampleSelectField;
