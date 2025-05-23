import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Comment } from "../interface/types";
import axios from "axios";
import HeadTitle from "../components/HeadTitle";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [comment, setComment] = useState<Comment | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/comments/${id}`
        );
        setComment(res.data);
      } catch (err: any) {
        setError(err.message || "failed to fetch comment.");
      } finally {
        setLoading(false);
      }
    };
    fetchComment();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!comment) return <div>No Comment Found</div>;
  return (
    <>
      <div className="container py-[30px] mx-auto px-[1rem]">
        <div className="p-6 border shadow rounded">
          <button className="bg-black text-white cursor-pointer px-[30px] py-[5px] rounded-[5px]" onClick={handleBack}>Back</button>
          <HeadTitle>Product Detail #{comment.id}</HeadTitle>
          <p>
            <strong>Name:</strong> {comment.name}
          </p>
          <p>
            <strong>Email:</strong> {comment.email}
          </p>
          <p>
            <strong>Body:</strong> {comment.body}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
