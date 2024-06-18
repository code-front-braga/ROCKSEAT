import { Post } from './Post';
import { Header } from './components/Header';

import './global.css';

export function App() {
  return (
    <>
      <Header />

      <Post
        author='Leonardo Braga'
        content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, illum!'
      />

      <Post
        author='Adailza Braga'
        content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, illum!'
      />
    </>
  );
}
