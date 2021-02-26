import Preview from "../components/Preview"
import { posts } from "../actions"

const Home = () => (
  <main className="w-full max-w-screen-lg grid lg:grid-cols-3 gap-7 md:grid-cols-2 mx-auto mt-20">
    {posts.map((post) => (
      <Preview key={post.link} post={post} />
    ))}
  </main>
)

export default Home