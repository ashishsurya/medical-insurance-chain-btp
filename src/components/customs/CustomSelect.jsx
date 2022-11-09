import React, { useId } from 'react';

const CustomSelect = ({ label, values, register, formkey, Icon }) => {
  const id = useId();
  return (
    <div className='flex flex-col'>
      <label htmlFor={`${id}-${label}`} className='pb-2'>
        <span className='pr-2'>
          {Icon && <Icon className='w-5 h-5 inline-block ' />}
        </span>
        {label}
      </label>
      <select
        {...register(formkey, { required: true })}
        className='capitalize'
        id={`${id}-${label}`}
      >
        {values?.map((value, i) => {
          return (
            <option className='' key={i} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CustomSelect;
