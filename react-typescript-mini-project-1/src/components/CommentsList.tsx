import React, { useEffect } from 'react';
import { useCommentsStore } from '../store/commentStore';
import { useNavigate } from 'react-router-dom';
import HeadTitle from './HeadTitle';

const CommentsList:React.FC = () => {

    const {comments, fetchComments, isLoading, error } = useCommentsStore();
     const navigate = useNavigate()


     useEffect(() => {
    fetchComments()
  }, [fetchComments])

  if(isLoading){
    return(
        <div>LOading...</div>
    )
  }
  if(error){
    return(
        <div><p>Error: {error}</p></div>
    )
  }
  return (
    <>
     <div className="container py-[30px] mx-auto px-[1rem]">
      <h2 className="text-xl font-bold mb-2">
        <HeadTitle>Product List</HeadTitle>
      </h2>
      <ul className="space-y-4">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="p-4 border listItem cursor-pointer rounded shadow cursor-pointer hover:bg-gray-100"
            onClick={() => navigate(`/product/${comment.id}`)}
          >
            <p><strong>{comment.name}</strong> ({comment.email})</p>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}

export default CommentsList;
