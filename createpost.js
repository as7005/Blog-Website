import React, { useState } from "react";
import { createPost } from "../api";
18
function CreatePost() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = { title, genre, content };
    createPost(postData).then(() => {
      alert("Post created successfully!");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a New Post</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreatePost;
