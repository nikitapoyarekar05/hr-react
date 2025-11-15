import styles from "./Button.module.css";

interface ButtonProps {
  id: string;
  type: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
  variant: string;
  ariaLabel?: string;
  onClick: () => void;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const {
    id,
    type,
    disabled = false,
    variant,
    ariaLabel,
    onClick,
    children,
  } = props;

  const getClassNames = () => {
    const classes = [
      styles.btn,
      styles.variant,
      disabled && styles.disabled,
    ].filter(Boolean);

    return classes.join(" ");
  };

  return (
    <button
      id={id}
      type={type}
      disabled={disabled ?? false}
      aria-disabled={disabled ?? false}
      className={getClassNames()}
      data-testid={variant ? `${variant}-${id}` : `test-${id}`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
