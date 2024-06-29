import styles from './EmptyTasks.module.css';

import { Notepad } from 'phosphor-react';

export function EmptyTasks() {
  return (
    <div className={styles.emptyBox}>
      <Notepad size={60} color='var(--gray-400)' />
      <div className={styles.textContent}>
        <h3>Você ainda não tem tarefas cadastradas</h3>
        <h4>Crie tarefas e organize seus itens a fazer</h4>
      </div>
    </div>
  );
}
