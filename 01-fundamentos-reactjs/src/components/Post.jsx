import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://github.com/code-front-braga.png' />
          <div className={styles.authorInfo}>
            <strong>Leonardo Primo</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='18 de Junho às 18:13:00' dateTime='2024-06-18 18:13:00'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='deixe um comentário' />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
