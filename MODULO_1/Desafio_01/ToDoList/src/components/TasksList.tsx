import styles from './TasksList.module.css';

import { Trash } from 'phosphor-react';

export function TasksList() {
  return (
    <ul>
      <li>
        <input
          className={styles.chb}
          type='checkbox'
          name='taskOk'
          id='task-radio'
        />
        <span>Estudar React na segunda-feira</span>
        <Trash size={22} color='var(--gray-300)' />
      </li>
      <li>
        <input
          className={styles.chb}
          type='checkbox'
          name='taskOk'
          id='task-radio'
        />
        <span>Estudar React na segunda-feira</span>
        <Trash size={22} color='var(--gray-300)' />
      </li>
    </ul>
  );
}
