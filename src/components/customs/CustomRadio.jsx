import { useId } from 'react';

const CustomRadio = ({ name, label, userType, setUserType }) => {
  const id = useId();
  const checked = userType === label
  return (
    <div className={`flex items-center rounded-xl space-x-2 border p-2 cursor-pointer   ${checked ? "bg-primary text-white" : ""}`}>
      <input
        hidden
        type='radio'
        name={name}
        id={`${id}-${label}`}
        checked={checked}
        onChange={() => {
          setUserType(label);
        }}
      />
      <label
        className="cursor-pointer"
        htmlFor={`${id}-${label}`}
        onClick={() => {
          setUserType(label);
        }}
      >
        {label}
      </label>
    </div>
  );
};

export default CustomRadio;
