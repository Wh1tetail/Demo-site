import { useCart } from '../store/CartContext';
import Button from './Button';
import styles from './GameCard.module.css';

export default function GameCard({ game }) {
  const { addToCart } = useCart();
  
  return (
    <div className={`glass-panel animate-fade-in-up ${styles.card}`}>
      <div className={styles.imageContainer}>
        <img src={game.image} alt={game.title} className={styles.image} />
        {game.isNew && <span className={styles.badge}>NEW</span>}
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{game.title}</h3>
          <span className={styles.price}>${game.price}</span>
        </div>
        <p className={styles.genre}>{game.genre}</p>
        <Button 
          variant="primary" 
          className={styles.buyBtn}
          onClick={() => addToCart(game)}
        >
          В корзину
        </Button>
      </div>
    </div>
  );
}
