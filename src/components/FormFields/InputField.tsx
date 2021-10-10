import { TextField } from '@material-ui/core';
import { InputHTMLAttributes } from 'hoist-non-react-statics/node_modules/@types/react';
import React from 'react';
import { Control, useController } from 'react-hook-form';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label?: string;
}

export function InputField({ name, control, label, ...inputProps }: InputFieldProps) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <TextField
      fullWidth
      size="small"
      margin="normal"
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      label={label}
      variant="outlined"
      innerRef={ref}
      error={invalid}
      helperText={error?.message}
      inputProps={inputProps}
    />
  );
}
