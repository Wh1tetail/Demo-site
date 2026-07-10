import { Link } from 'react-router-dom';
import GameCard from '../components/GameCard';
import Button from '../components/Button';
import { GAMES_DATA } from '../data';
import styles from './Home.module.css';

export default function Home() {
  const newGames = GAMES_DATA.filter(g => g.isNew);

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent} animate-fade-in-up`}>
          <h1 className={styles.title}>
            Погрузись в <span className="text-gradient">новую реальность</span>
          </h1>
          <p className={styles.subtitle}>Лучшие игры премиум качества. Откройте для себя новые миры с Neon Games.</p>
          <div className={styles.heroActions}>
            <Link to="/catalog">
              <Button variant="primary" className={styles.heroBtn}>Смотреть каталог</Button>
            </Link>
          </div>
        </div>
        <div className={styles.heroGlow}></div>
      </section>

      <section className={`container ${styles.section}`}>
        <h2 className={styles.sectionTitle}>Новинки</h2>
        <div className={styles.grid}>
          {newGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </div>
  );
}
