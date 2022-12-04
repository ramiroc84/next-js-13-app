import Link from 'next/link'
import LikeButton from '../../../components/LikeButton'

const fetchPosts = () => {
  // return fetch('https://jsonplaceholder.typicode.com/posts') // crea una pagina estatica
  // return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' }) // server side render
  return fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60 } }) // cada minuto se regenear la pagina
    .then((res) => res.json())
}
const PostsList = async () => {
  const posts = await fetchPosts()
  // NO FUNCIONA PORQUE SON COMPONENTES EJECUTADOS EN EL SERVIDOR
  // const handleClick = () => {
  //   alert('ME GUSTA ESTE POST')
  // }
  return (
    <section>
      {posts.slice(0, 10).map(post => (
        <article key={post.id}>
          <Link href='/posts/[id]' as={`/posts/${post.id}`}>
            <h2 style={{ color: '#09f' }}>{post.title}</h2>
            <p>{post.body}</p>
            {/* <button onClick={handleClick}>Me gusta</button> */}
          </Link>
          <LikeButton id={post.id} />
        </article>
      ))}
    </section>
  )
}

export default PostsList
