interface Props {
  value: number;
  onChange: (number) => void;
  placeholder: string;
  initialHolder: string;
}

const SampleControlledNumberInput = ({
  value,
  onChange,
  placeholder,
  initialHolder
}: Props): JSX.Element => {
  return (
    <span
      className="border text-lg shadow bg-white border-blue-400 p-2 rounded-sm max-w-xs"
      style={{ minWidth: '240px'}}
    >
      {initialHolder}
      <input
      className="m-2"
        type="number"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(Number(e.target.value))
        }
        value={value}
      />
      {placeholder}
    </span>
  );
};

export default SampleControlledNumberInput;
