import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';

import styles from './App.module.css';

import { Header } from './components/Header';
import { Header as ListHeader } from './components/List/Header';
import { Item } from './components/List/Item';
import { Empty } from './components/List/Empty';
import { Button } from './components/Button';
import { Input } from './components/Input';

export interface ITask {
  id: number;
  text: string;
  isChecked: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState('');

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1;
    }
    return prevValue;
  }, 0);

  function handleAddTask() {
    if (!inputValue) {
      return;
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    };

    setTasks(state => [...state, newTask]);
    setInputValue('');
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter(task => task.id !== id);

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return;
    }

    setTasks(filteredTasks);
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isChecked: value };
      }

      return { ...task };
    });

    setTasks(updatedTasks);
  }

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input
            onChange={e => setInputValue(e.target.value)}
            value={inputValue}
          />

          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color='var(--gray-100)' />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <ListHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

          {tasks.length > 0 ? (
            <div>
              {tasks.map(task => (
                <Item
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTasksStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  );
}
