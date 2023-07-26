import { MouseEventHandler } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: String;
  variant: 'primary' | 'secondary';
  disabled?: Boolean;
}

const Button = ({ onClick, text, variant, disabled = false }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${variant === 'primary' ? styles.primary : styles.secondary} ${
        disabled && styles.disabled
      }`}
      onClick={onClick}
      disabled={disabled && true}
    >
      {text}
    </button>
  );
};

export default Button;
