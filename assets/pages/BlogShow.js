import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { exampleBlogs } from "../exampleBlogs";

const today = new Date();
const BlogShow = () => {
  const id = useParams().id;
  const [blog, setBlog] = useState({});
  const [isPopup, setIsPopup] = useState(false);

  useEffect(() => {
    if (["breakfast", "lunch", "dinner"].includes(id)) {
      displayExample();
    } else {
      fetchBlog();
    }
  }, []);

  const fetchBlog = () => {
    axios
      .get(`/api/blog/${id}`)
      .then((response) => setBlog(response.data))
      .catch((error) => console.log(error));
  };

  const displayExample = () => {
    const exampleInfo = exampleBlogs.filter((exampleBlog) => {
      return exampleBlog.id === id;
    });
    setBlog(exampleInfo[0]);
  };

  return (
    <div className="container">
      <Link to="/blog">All posts</Link>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <p>{today.toDateString("en-US", blog.date?.date.slice(0, 11))}</p>
        <h1>{blog.title}</h1>
        <img className="container-img" src={blog.image} />
        <p>{blog.description}</p>
        {["breakfast", "lunch", "dinner"].includes(id) ? (
          <button onClick={() => setIsPopup(true)}>Edit</button>
        ) : (
          <>
            <button>
              <Link to={`/edit/${id}`}>Edit</Link>
            </button>
          </>
        )}

        {isPopup && (
          <div className="popUp">
            <div className="popUpText">
              <p>This is just an example. Please create your own post</p>
              <button onClick={() => setIsPopup(false)}>X</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogShow;
