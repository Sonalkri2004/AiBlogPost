import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  return (
    <Card className="post-card" style={{ marginBottom: "1rem", background: "linear-gradient(90deg, #ff7e5f, #feb47b)" }}>
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="body2">{post.summary}</Typography>
        <Button onClick={() => navigate(`/post/${post._id}`)} style={{ marginTop: "1rem" }}>
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

export default PostCard;
