import { useState } from 'react';
import GameCard from '../components/GameCard';
import { GAMES_DATA } from '../data';
import styles from './Catalog.module.css';

export default function Catalog() {
  const [filter, setFilter] = useState('');

  const filteredGames = GAMES_DATA.filter(game => 
    game.title.toLowerCase().includes(filter.toLowerCase()) ||
    game.genre.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={`container ${styles.catalog}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Каталог Игр</h1>
        <input 
          type="text" 
          placeholder="Поиск по названию или жанру..." 
          className={styles.searchInput}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      
      <div className={styles.grid}>
        {filteredGames.length > 0 ? (
          filteredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))
        ) : (
          <p className={styles.empty}>Ничего не найдено</p>
        )}
      </div>
    </div>
  );
}
