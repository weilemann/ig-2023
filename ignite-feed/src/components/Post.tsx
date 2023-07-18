type PostProps = {
    author: string;
    content: string;
}

export function Post({ author, content }: PostProps) {
    return (
        <div>
            <h1>{author}</h1>
            <span>{content}</span>
        </div>
    )
}