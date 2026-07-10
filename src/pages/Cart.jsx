import { useCart } from '../store/CartContext';
import Button from '../components/Button';
import { Trash2 } from 'lucide-react';
import styles from './Cart.module.css';

export default function Cart() {
  const { cartItems, removeFromCart, total, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className={`container ${styles.empty}`}>
        <h2>Ваша корзина пуста</h2>
        <p>Перейдите в каталог, чтобы добавить игры.</p>
      </div>
    );
  }

  return (
    <div className={`container ${styles.cart}`}>
      <h1 className={styles.title}>Оформление заказа</h1>
      <div className={styles.layout}>
        <div className={styles.itemsList}>
          {cartItems.map(item => (
            <div key={item.id} className={`glass-panel ${styles.cartItem}`}>
              <img src={item.image} alt={item.title} className={styles.itemImage}/>
              <div className={styles.itemInfo}>
                <h3>{item.title}</h3>
                <p>{item.genre}</p>
                <p className={styles.qty}>Количество: {item.quantity}</p>
              </div>
              <div className={styles.itemMeta}>
                <span className={styles.price}>${(item.price * item.quantity).toFixed(2)}</span>
                <button 
                  className={styles.removeBtn} 
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Удалить"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={`glass-panel ${styles.summary}`}>
          <h2>Итого</h2>
          <div className={styles.summaryRow}>
            <span>Товары ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className={`${styles.summaryRow} ${styles.totalRow}`}>
            <span>К оплате</span>
            <span className="text-gradient">${total.toFixed(2)}</span>
          </div>
          <Button variant="primary" className={styles.checkoutBtn} onClick={() => {
            alert('Заказ успешно оформлен! (Демо)');
            clearCart();
          }}>
            Оплатить
          </Button>
        </div>
      </div>
    </div>
  );
}
