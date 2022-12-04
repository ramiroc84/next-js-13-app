// import Counter from '../../components/Counter'

const PostsLayout = ({ children }) => {
  return (
    <div>
      {/* <Counter /> */}
      <small>layout-/posts-BEGIN</small>
      <br />
      <small>Home &bull; Posts</small>
      {children}
      <small>layout-/posts-END</small>
    </div>
  )
}

export default PostsLayout
