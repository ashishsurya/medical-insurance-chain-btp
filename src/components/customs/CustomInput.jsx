import { useId } from 'react';

const CustomInput = ({
  Icon,//icon for ui
  label,//label for screen readers
  register,// react-hook form
  formKey,// key to store value
  notFullWidth,
  minLength,
  maxLength,
  type,// type of input
}) => {
  const id = useId();
  return (
    <div className='flex flex-col '>
      <div className='flex items-center space-x-2'>
        <Icon className='w-7 h-7' />
        <label htmlFor={`${id}-${label}`}>{label}</label>
      </div>
      <div className={`space-x-4 flex items-center`}>
        <input
          id={`${id}-${label}`}
          type={type ? type : 'text'}
          className={`border focus:border-2 rounded-xl p-2 flex-1`}
          {...register(formKey, {
            required: 'This is a required field',
            minLength,
            maxLength,
          })}
        />
        {/* Web3 Modal btn need to be implemented */}
        {notFullWidth && (
          <button type='button' className=''>
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
