import Link from 'next/link'

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { next: { revalidate: 60 } }) // cada minuto se regenear la pagina
    .then((res) => res.json())
}

const Post = async ({ children, params }) => {
  const { id } = params // id viene del nombre de la carpeta [id]
  const post = await fetchSinglePost(id)

  return (
    <article>
      <small>layout-/posts/[id]-BEGIN</small>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
      <small>layout-/posts/[id]-END</small>
    </article>
  )
}

export default Post
