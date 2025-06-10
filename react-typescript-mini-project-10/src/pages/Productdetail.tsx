import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePostStore } from "../store/postStore";
import BtnPrimary from "../components/BtnPrimary";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { posts, fetchPosts, loading } = usePostStore();

  const post = posts.find((p) => p.id === Number(id));

  useEffect(() => {
    if (!post) {
      fetchPosts();
    }
  }, [posts, fetchPosts]);

  const handleBack = () => {
    navigate("/productlist");
  };

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found.</div>;

  return (
    <div className="content">
      <div className="container mx-auto px-[1rem]">
        <h2>Product Detail</h2>
        <div className="shadow-light-500 grid gap-[10px] bg-gray-400 rounded-[10px] p-[10px]">
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p className="text-gray-700">{post.body}</p>
        </div>
        <BtnPrimary onClick={handleBack}>Back to Product List</BtnPrimary>
      </div>
    </div>
  );
};

export default ProductDetail;
