

// // ✅ CORRECT App.jsx
// import React from 'react';
// import BlogPostList from './components/BlogPostList/BlogPostList';
// import { samplePosts } from './data/posts';

// const App = () => {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Blog Posts</h1>
//       <BlogPostList posts={samplePosts} />
//     </div>
//   );
// };

// export default App;





// import BlogPostDetail from './components/BlogPostDetail/BlogPostDetail';

// // example post object (passed as props from parent or router)
// const post = {
//   title: "My First Blog Post",
//   content: "<p>This is the <strong>full</strong> blog post content.</p><p>More content here.</p>",
//   author: "John Doe",
//   date: "2023-01-01",
// };

// function PostPage() {
//   return (
//     <BlogPostDetail
//       title={post.title}
//       content={post.content}
//       author={post.author}
//       date={post.date}
//     />
//   );
// }


// export default App;



// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import BlogPostList from './components/BlogPostList/BlogPostList';
// import BlogPostDetail from './components/BlogPostDetail/BlogPostDetail';
// import { samplePosts } from './data/posts';

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<BlogPostList posts={samplePosts} />} />
//       <Route
//         path="/posts/:id"
//         element={<BlogPostDetailWrapper />}
//       />
//     </Routes>
//   );
// };

// const BlogPostDetailWrapper = () => {
//   const { id } = useParams();
//   const post = samplePosts.find((p) => p.id === id);

//   if (!post) return <p>Blog post not found.</p>;

//   return (
//     <BlogPostDetail
//       title={post.title}
//       content={post.content || '<p>No content</p>'}
//       author={post.author || 'Unknown'}
//       date={post.date}
//     />
//   );
// };

// import { useParams } from 'react-router-dom';

// export default App;
















import React, { useState } from 'react';
import { Routes, Route, useParams, useNavigate, Link } from 'react-router-dom';
import BlogPostList from './components/BlogPostList/BlogPostList';
import BlogPostDetail from './components/BlogPostDetail/BlogPostDetail';
import BlogPostForm from './components/BlogPostForm/BlogPostForm';
import DeleteButton from './components/DeleteButton/DeleteButton';
import ConfirmationDialog from './components/ConfirmationDialog/ConfirmationDialog';
import { samplePosts } from './data/posts';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts/:id" element={<BlogPostDetailWrapper />} />
      <Route path="/create" element={<CreatePostWrapper />} />
      <Route path="/edit/:id" element={<EditPostWrapper />} />
    </Routes>
  );
};

const HomePage = () => {
  return (
    <div>
      <div style={{ textAlign: 'right', marginBottom: '20px' }}>
        <Link to="/create">
          <button>Create New Post</button>
        </Link>
      </div>
      <BlogPostList posts={samplePosts} />
    </div>
  );
};

const BlogPostDetailWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = samplePosts.find((p) => p.id === id);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (!post) return <p>Blog post not found.</p>;

  const handleDelete = () => {
    console.log('Deleting post:', post.id);
    setIsDialogOpen(false);
    navigate('/');
  };

  return (
    <div>
      <div style={{ textAlign: 'right', marginBottom: '10px' }}>
        <Link to={`/edit/${id}`}>
          <button>Edit Post</button>
        </Link>
        <DeleteButton onClick={() => setIsDialogOpen(true)} />
      </div>
      <BlogPostDetail
        title={post.title}
        content={post.content || '<p>No content</p>'}
        author={post.author || 'Unknown'}
        date={post.date}
      />
      <ConfirmationDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

const CreatePostWrapper = () => {
  const navigate = useNavigate();
  const handleCreate = (newPost) => {
    console.log('Creating post:', newPost);
    navigate('/');
  };
  return <BlogPostForm onSubmit={handleCreate} />;
};

const EditPostWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = samplePosts.find((p) => p.id === id);

  if (!post) return <p>Blog post not found.</p>;

  const handleUpdate = (updatedPost) => {
    console.log('Updating post:', { ...post, ...updatedPost });
    navigate(`/posts/${id}`);
  };

  return <BlogPostForm post={post} onSubmit={handleUpdate} />;
};

export default App;












// import { Routes, Route } from 'react-router-dom';
// import BlogPostList from './components/BlogPostList/BlogPostList';
// import BlogPostDetail from './components/BlogPostDetail/BlogPostDetail';

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<BlogPostList />} />
//       <Route path="/post/:id" element={<BlogPostDetailWrapper />} />
//     </Routes>
//   );
// }

