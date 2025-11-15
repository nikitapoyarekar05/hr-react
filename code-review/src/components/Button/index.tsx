import React, { type HtmlHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  id?: string;
  onClick: () => void;
  children: React.ReactNode;
  testId: string;
}

const Button = (props: ButtonProps) => {
  const { id, testId, onClick, children } = props;
  return (
    <button
      id={id ?? "default-button"}
      className={styles.button}
      onClick={onClick}
      data-testid={testId ?? "btn"}
    >
      {children}
    </button>
  );
};

export default Button;
