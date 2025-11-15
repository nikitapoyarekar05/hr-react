import React from "react";
import formStyles from "../../styles/form.module.css";

interface GenericTextAreaProps {
  id: string;
  required: boolean;
  label: string;
  customTestId?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  errorMessage?: string;
  rows?: number;
  cols?: number;
  placeholder: string;
  maxLength?: number;
}

const GenericTextArea = (props: GenericTextAreaProps) => {
  const {
    id,
    required,
    label,
    customTestId,
    value,
    onChange,
    error,
    errorMessage,
    rows = 4,
    cols,
    placeholder,
    maxLength,
  } = props;

  console.log({ label });

  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={formStyles.formGroup}>
      <label className={formStyles.label} htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        className={formStyles.textArea}
        data-testid={customTestId ?? `test-${id}`}
        value={value}
        aria-describedby={errorId}
        aria-required={required}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      {error && (
        <span id={errorId} className={formStyles.error}>
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default React.memo(GenericTextArea);
