import styles from './Header.module.css';

import { Rocket } from 'phosphor-react';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Rocket size={36} color='var(--blue)' />
        <h1>
          to<span>do</span>
        </h1>
      </div>
    </header>
  );
}
