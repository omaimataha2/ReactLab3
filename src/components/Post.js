import CardPost from "./Card";
import { fetchPostByID } from "./Api/posts";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Post() {
    let { id } = useParams();
    let [post, setPost] = useState([]);

    useEffect(() => {
        fetchPostByID(id)
            .then(({ data }) => {
                setPost(data);
            })
            .catch((err) => {
                setPost(null);
            });
    }, [id]);
    return (
        <Container className="emp-profile ">
        {!post && <div></div>}
        {post ? (
          <CardPost key={id} Title={post.title} Body={post.body} />
        ) : null}
      </Container>

    )


}