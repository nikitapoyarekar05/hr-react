import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  id?: string;
  onClick: () => void;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { id, onClick, children } = props;
  return (
    <div>
      <button
        id={id ?? "default-button"}
        className={styles.button}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
