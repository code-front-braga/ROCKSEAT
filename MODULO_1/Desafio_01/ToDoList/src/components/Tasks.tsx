import styles from './Tasks.module.css';
import { EmptyTasks } from './EmptyTasks';
import { TasksList } from './TasksList';

export function Tasks() {
  return (
    <section>
      <div className={styles.tasksStatus}>
        <span className={styles.createdTasks}>Tarefas criadas</span>
        <span className={styles.doneTasks}>Concluídas</span>
      </div>

      <TasksList />
    </section>
  );
}
