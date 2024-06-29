import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { TasksList } from './components/TasksList';

import './Global.css';

export default function App() {
  return (
    <>
      <Header />
      <AddTask />
      <Tasks />
      {/* <TasksList /> */}
    </>
  );
}
