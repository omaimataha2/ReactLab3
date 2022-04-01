import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "./Api/posts";
import CardPost from "./Card";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchAllPosts()
      .then(({ data }) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        setPosts([]);
      });
  }, [setPosts]);
  return (
    <>
      <div className=" text-center row ">
       
        {posts.map((post, index) => {
          return <CardPost key={index} Title={post.title} Body={post.body} />;
        })}
      </div>
      
    </>
  );
}