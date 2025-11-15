import React from "react";

import formStyles from "../../styles/form.module.css";

interface GenericInputFieldProps {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  label: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
}

const GenericInputField = (props: GenericInputFieldProps) => {
  const {
    id,
    type,
    placeholder,
    value,
    onChange,
    label,
    error = false,
    disabled = false,
    required,
  } = props;

  console.log({ label });

  return (
    <div className={formStyles.formGroup}>
      <label
        htmlFor={id}
        data-testid={`label-${id}`}
        className={formStyles.label}
      >
        {label}
      </label>
      <input
        className={formStyles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        required={required}
        data-testid={`input-${id}`}
      />
      {error && (
        <div id={`error-${id}`} data-testid={`error-${id}`}>
          {error}
        </div>
      )}
    </div>
  );
};

export default React.memo(GenericInputField);
