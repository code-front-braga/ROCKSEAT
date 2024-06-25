import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'
import './Global.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
      <Sidebar />
      </div>
    </>
  );
}
