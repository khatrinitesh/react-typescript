import React, { useEffect } from "react";
import { usePostStore } from "../store/postStore";
import { Link } from "react-router-dom";
import BtnPrimary from "../components/BtnPrimary";

const ProductList: React.FC = () => {
  const { posts, loading, error, fetchPosts, deletePost } = usePostStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleClick = (post: { id: number }) => {
    deletePost(post.id);
  };

  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="content">
      <div className="container mx-auto px-[1rem]">
        <h2>Product List</h2>
        <ul className="space-y-2">
          {posts.map((post) => (
            <li key={post.id} className="border p-2 rounded">
              <Link to={`/productlist/${post.id}`}>
                <span className="text-blue-600 font-bold text-3xl">
                  {post.id}
                </span>
                <h3 className="font-semibold">{post.title}</h3>
                <p>{post.body}</p>
              </Link>
              <BtnPrimary onClick={() => handleClick(post)}>Delete</BtnPrimary>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
