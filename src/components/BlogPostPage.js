// src/components/BlogPostPage.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogPostDetail from './BlogPostDetail';
import DeleteButton from './DeleteButton';
import ConfirmationDialog from './ConfirmationDialog';

const BlogPostPage = ({ posts, onDeletePost }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === id);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (!post) {
    return <p>Blog post not found.</p>;
  }

  const handleDelete = () => {
    onDeletePost(id);
    navigate('/');
  };

  return (
    <div>
      <BlogPostDetail
        title={post.title}
        content={post.content}
        author={post.author}
        date={post.date}
      />
      <DeleteButton onClick={() => setIsDialogOpen(true)} />
      <ConfirmationDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default BlogPostPage;
