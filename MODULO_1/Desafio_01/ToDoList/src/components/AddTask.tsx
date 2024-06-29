import styles from './AddTask.module.css';

import { PlusCircle } from 'phosphor-react';

export function AddTask() {
  return (
    <form className={styles.form}>
      <input
        type='text'
        name='task'
        id='input-task'
        placeholder='Adicione uma nova tarefa'
      />
      <button type='submit'>
        Criar <PlusCircle size={16} />{' '}
      </button>
    </form>
  );
}
