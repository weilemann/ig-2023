import { useState } from 'react';
import { IContent } from '../interfaces/IContent';
import { IUser } from '../interfaces/IUser';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

type PostProps = {
  author: IUser;
  content: IContent[];
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState<string[]>([]);
  const [newCommentText, setNewCommentText] = useState<string>('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH'h'mm", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setComments([...comments, newCommentText])
    setNewCommentText("");
  }

  function handleNewCommentChange(e: React.FormEvent<HTMLTextAreaElement>) {
    e.preventDefault();

    setNewCommentText(e.currentTarget.value)
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete)

    setComments(commentsWithoutDeletedOne);
  }

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

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          content.map(line => {
            if (line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>
            } else if (line.type === 'link') {
              return <p key={line.content}><a href={line.url} target='_blank'>{line.content}</a></p>
            }
          })
        }
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
          value={newCommentText}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map(comment => {
            return (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
              />
            )
          })
        }
      </div>
    </article>
  )
}