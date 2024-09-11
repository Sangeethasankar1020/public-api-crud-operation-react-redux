import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePost } from "../features/posts/postsSlice";
import PostForm from "./PostForm";

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);
  const [post, setPost] = useState({ id: "", title: "", body: "" }); // State for the form

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (status === "loading") return <p className="text-center">Loading...</p>;
  if (status === "failed") return <p className="text-red-500">Error:</p>;

  return (
    <div className="container mx-auto p-6">
      <PostForm post={post} setPost={setPost} /> {/* Pass state and setState */}
      <h2 className="text-2xl font-bold mb-4">Posts Lists</h2>
      {posts.map((post) => (
        <div key={post.id} className="bg-white shadow-lg rounded-lg p-6 mb-4">
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p className="text-gray-700">{post.body}</p>
          <button
            onClick={() => dispatch(deletePost(post.id))}
            className="bg-red-500 text-white py-2 px-4"
          >
            Delete
          </button>
          <button
            onClick={() => setPost(post)} // Load the post data for editing
            className="bg-yellow-500 text-white py-2 px-4 ml-2"
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
