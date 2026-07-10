import styles from './Button.module.css';

export default function Button({ children, onClick, variant = 'primary', className = '' }) {
  return (
    <button 
      className={`${styles.btn} ${styles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
