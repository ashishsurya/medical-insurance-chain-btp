import { useAccount, Web3Button } from '@web3modal/react';
import { useId } from 'react';

const CustomInput = ({
  Icon, //icon for ui
  label, //label for screen readers
  register, // react-hook form
  formKey, // key to store valu,
  minLength,
  maxLength,
  type, // type of input
}) => {
  const id = useId();
  const {
    account: { address },
  } = useAccount();
  return (
    <div className='flex flex-col space-y-1'>
      <div className='flex items-center space-x-2'>
        <Icon className='w-6 h-6' />
        <label htmlFor={`${id}-${label}`}>{label}</label>
      </div>
      <div className={`space-x-4 flex items-center`}>
        <input
          id={`${id}-${label}`}
          type={type ? type : 'text'}
          className={`border  rounded-xl p-2 flex-1`}
          {...register(formKey, {
            required: 'This is a required field',
            minLength,
            maxLength,
          })}
        />
      </div>
    </div>
  );
};

export default CustomInput;
