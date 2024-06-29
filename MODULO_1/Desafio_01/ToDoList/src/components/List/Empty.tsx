import { Notepad } from 'phosphor-react';

import styles from './Empty.module.css';

export function Empty() {
  return (
    <div className={styles.emptyContainer}>
      <Notepad size={38} color='var(--gray-500)' />
      <p>
        <strong> Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
