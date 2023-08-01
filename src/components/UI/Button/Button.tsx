import styles from './Button.module.css';

type ButtonProps = {
  onClick: () => void;
  text: string;
  variant: 'primary' | 'secondary';
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ onClick, text, variant, disabled = false }) => {
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
