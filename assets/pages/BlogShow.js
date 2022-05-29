import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout";

const BlogShow = () => {
  const [id, setId] = useState(useParams().id);
  const [blog, setBlog] = useState({});

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = () => {
    axios
      .get(`/api/blog/${id}`)
      .then((response) => setBlog(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <h1>{blog.title}</h1>
      <img className="container-img" src={blog.image} />
      <p>{blog.description}</p>
      <button>
        <Link to={`/edit/${id}`}>Edit</Link>
      </button>
    </div>
  );
};

export default BlogShow;
