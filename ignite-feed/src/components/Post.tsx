import { IContent } from '../interfaces/IContent';
import { IUser } from '../interfaces/IUser';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

type PostProps = {
    author: IUser;
    content: IContent[];
    publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title="18 de Julho às 20h18" dateTime="2023-07-18 20:18:32">Publicado há 1h</time>
            </header>

            <div className={styles.content}>

            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário' />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}