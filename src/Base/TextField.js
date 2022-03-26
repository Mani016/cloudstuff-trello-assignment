import React from 'react';
import { firstLetterCapital } from '../utils';
const TextField = (props) => {
  const { register, name, className, placeholder, type, errors } =
    props;
  return (
    <div className={className}>
        <label>Enter {firstLetterCapital(name)}</label>
      <input
        className='form-control my-2'
        placeholder={placeholder}
        type={type}
        {...register(name, {
          required:'This Field is required',
        })}
      />
      {errors[name] && (
        <span className='text-danger'>{errors[name].message}</span>
      )}
    </div>
  );
};
export default TextField;
