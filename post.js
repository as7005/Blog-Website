import React from "react";

function Post({ post }) {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <img src={post.poster} alt={post.title} />
      <p>Genre: {post.genre}</p>
      <p>{post.content}</p>
      <div className="post-actions">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </div>
  );
}

export default Post;
