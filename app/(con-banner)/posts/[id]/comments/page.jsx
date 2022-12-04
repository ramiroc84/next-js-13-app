const fetchComments = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { next: { revalidate: 60 } }) // cada minuto se regenear la pagina
    .then((res) => res.json())
}

const Comments = async ({ params }) => {
  const { id } = params // id viene del nombre de la carpeta [id]
  const comments = await fetchComments(id)

  return (
    <ul style={{ background: '#222', fontSize: '12px' }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <h2>{comment.name}</h2>
          <small>{comment.email}</small>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}

export default Comments
