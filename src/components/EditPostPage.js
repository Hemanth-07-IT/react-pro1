import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogPostForm from './BlogPostForm';

const EditPostPage = ({ posts, onUpdatePost }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === id);

  const handleSubmit = (updatedPost) => {
    alert(`Post Updated!\n${JSON.stringify(updatedPost, null, 2)}`);
    onUpdatePost({ ...updatedPost, id }); // Keep id
    navigate(`/posts/${id}`);
  };
  
  if (!post) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div>
      <h2>Edit Blog Post</h2>
      <BlogPostForm post={post} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditPostPage;
