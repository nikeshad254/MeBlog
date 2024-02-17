import { useEffect, useState } from "react";
import appWriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { TAppwritePost } from "../types";

function AllPosts() {
  const [posts, setPosts] = useState<TAppwritePost[]>([]);

  useEffect(() => {
    appWriteService.getPosts().then((value) => {
      if (value === false) {
        // Handle the case where getPosts returns false
      } else {
        const posts = value.documents;
        setPosts(posts as any);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id}>
              <PostCard
                $id={post.$id!}
                title={post.title}
                featuredImage={post.featuredImage}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
