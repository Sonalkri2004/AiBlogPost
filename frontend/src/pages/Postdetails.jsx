import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/posts/${id}`)
      .then((response) => setPost(response.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/posts/${id}`)
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Button variant="contained" color="primary" onClick={() => navigate(`/edit/${id}`)}>
        Edit
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDelete} style={{ marginLeft: "1rem" }}>
        Delete
      </Button>
    </div>
  );
};

export default PostDetails;
