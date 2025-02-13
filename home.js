import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api";
import Post from "./Post";

function HomePage() {
  const [posts, setPosts] = useState([]);
  
useEffect(() => {
    fetchPosts().then((response) => {
      setPosts(response.data);
    });
  }, []);
  return (
    <div>
      <h1>Movie Reviews</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    
17
</div>  
);
}
export default HomePage;

