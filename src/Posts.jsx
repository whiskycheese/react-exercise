import EachPost from "./EachPost";
import { usePosts } from "./hook/usePosts";

const Posts = () => {
  const { posts, error } = usePosts();

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <ul>
        {posts.map((post) => (
          <EachPost key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
};

export default Posts;
