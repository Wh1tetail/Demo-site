import { Link } from 'react-router-dom';
import { ShoppingCart, Gamepad2, Search } from 'lucide-react';
import { useCart } from '../store/CartContext';
import styles from './Header.module.css';

export default function Header() {
  const { cartItems } = useCart();
  
  return (
    <header className={`${styles.header} glass-panel`}>
      <div className={`container ${styles.headerContent}`}>
        <Link to="/" className={styles.logo}>
          <Gamepad2 color="var(--accent-cyan)" size={28} />
          <span className="text-gradient">Neon Games</span>
        </Link>
        <nav className={styles.nav}>
          <Link to="/">Главная</Link>
          <Link to="/catalog">Каталог</Link>
        </nav>
        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Поиск">
            <Search size={20} />
          </button>
          <Link to="/cart" className={styles.cartBtn} aria-label="Корзина">
            <ShoppingCart size={20} />
            {cartItems.length > 0 && <span className={styles.badge}>{cartItems.length}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}
