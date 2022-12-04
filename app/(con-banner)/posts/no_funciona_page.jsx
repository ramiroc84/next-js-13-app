import { useEffect, useState } from 'react'
const PostsPage = () => {
  const [posts, setPosts] = useState([])

  // si fuese con react hariamos el fetch de esta forma
  // los componentes (pages) de la carpeta app por defecto se ejecutan en el servidor y no en el cliente
  // este componente es un REACT SERVER COMPONENT y por lo tanto el fetching de datos esta ocurrienedo en el servidor

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then(data => {
        setPosts(data)
      })
  }, [])

  return (
    <section>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </section>
  )
}

export default PostsPage
