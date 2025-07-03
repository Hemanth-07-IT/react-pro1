// src/components/BlogPostPage.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogPostDetail from './BlogPostDetail';
import DeleteButton from './DeleteButton';
import ConfirmationDialog from './ConfirmationDialog';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const BlogPostPage = ({ posts, onDeletePost }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === id);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [comments, setComments] = useState([]);

  if (!post) {
    return <p>Blog post not found.</p>;
  }

  const handleDelete = () => {
    onDeletePost(id);
    navigate('/');
  };

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <BlogPostDetail
        title={post.title}
        content={post.content}
        author={post.author}
        date={post.date}
      />

      <div className="deleteButtonWrapper">
        <DeleteButton onClick={() => setIsDialogOpen(true)} />
      </div>

      <ConfirmationDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={handleDelete}
      />

      {/* Comment Section */}
      <h3 style={{ marginTop: '40px' }}>Comments</h3>
      <CommentList comments={comments} />
      <CommentForm onSubmit={handleAddComment} isLoggedIn={false} userName="" />
    </div>
  );
};

export default BlogPostPage;
