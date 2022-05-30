import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { exampleBlogs } from "../exampleBlogs";
import Popup from "./Popup";

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
    <div>
      <h3>
        <Link to="/blog" className="link-wrapper">
          All posts
        </Link>
      </h3>
      <div className="d-flex justify-content-center align-items-center flex-column gap-3">
        <p>{today.toDateString("en-US", blog.date?.date.slice(0, 11))}</p>
        <h1>{blog.title}</h1>
        <img className="container-img" src={blog.image} />
        <p className="show-description">{blog.description}</p>
        {["breakfast", "lunch", "dinner"].includes(id) ? (
          <button onClick={() => setIsPopup(true)} className="btn btn-primary">
            Edit
          </button>
        ) : (
          <button className="btn btn-primary">
            <Link to={`/edit/${id}`} style={{ color: "white" }}>
              Edit
            </Link>
          </button>
        )}

        {isPopup && <Popup setIsPopup={setIsPopup} />}
      </div>
    </div>
  );
};

export default BlogShow;
