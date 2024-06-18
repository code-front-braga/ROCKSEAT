import { Post } from './Post';
import { Header } from './components/Header';

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Leonardo Braga'
            content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, illum!'
          />

          <Post
            author='Adailza Braga'
            content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, illum!'
          />
        </main>
      </div>
    </>
  );
}
