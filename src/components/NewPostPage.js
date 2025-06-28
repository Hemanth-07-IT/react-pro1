import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogPostForm from './BlogPostForm';
import { samplePosts } from '../App';

const NewPostPage = ({ onAddPost }) => {
  const navigate = useNavigate();

  const handleSubmit = (newPost) => {
    // In a real app, save the post to a database.
    // Here we'll just alert and navigate.
    alert(`Post Created!\n${JSON.stringify(newPost, null, 2)}`);
    onAddPost(newPost);
    navigate('/');
  };
  
  return (
    <div>
      <h2>Create New Blog Post</h2>
      <BlogPostForm onSubmit={handleSubmit} />
    </div>
  );
};

export default NewPostPage;
