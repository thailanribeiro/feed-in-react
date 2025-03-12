import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.author}>
          <img className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/102111932?v=4" />
          <div className={styles.authorInfo}>
            <strong>Thailan Ribeiro</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <div>
          <time className={styles.dateTime} title="11 de Março às 20:41" dateTime="2025-03-11 20:41:30">Publicado há 1h</time>
        </div>
      </header>
      <div className={styles.postContent}>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>

        <p>
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
        </p>

        <p>
          <a href="#">👉 jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto #nlw #rocketseat</a>
        </p>

      </div>
    </article>
  )
}