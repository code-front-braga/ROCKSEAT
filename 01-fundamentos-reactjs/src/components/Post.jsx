import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
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
ma
        <time title='18 de Junho às 18:13:00' dateTime='2024-06-18 18:13:00'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p> </p>
        <p>Fala galeraa 👋 </p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da</p>
        <p>Rocketseat. O nome do projeto é DoctorCare 🚀 </p>
        <p>
          👉 <a href=''>leo.design/doctorcare</a>
        </p>
        <p>
          <a href=''>#novoprojeto</a> <a href=''>#nlw</a> <a href=''>#rocketseat</a>
        </p>
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
