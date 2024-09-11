import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../features/posts/postsSlice";

const PostForm = ({ post, setPost }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post.id) {
      dispatch(updatePost(post)); // If post has an ID, update the post
    } else {
      dispatch(createPost(post)); // Otherwise, create a new post
    }
    setPost({ id: "", title: "", body: "" }); // Reset the form after submission
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          className="border border-gray-300 rounded w-full py-2 px-3 mb-2"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Body"
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          className="border border-gray-300 rounded w-full py-2 px-3 mb-2"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 rounded">
        {post.id ? "Update Post" : "Add Post"}
      </button>
    </form>
  );
};

export default PostForm;
