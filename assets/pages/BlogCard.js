import React from "react";
import { Link } from "react-router-dom";

const today = new Date();
const BlogCard = ({ blog, handleDelete }) => {
  return (
    <li className="blog-item" key={blog.id}>
      <img className="card-img" src={blog.image} />
      <div className="blog-description">
        <h6 className="date">
          {today.toDateString("en-US", blog.date?.date.slice(0, 11))}
        </h6>
        <Link to={`/show/${blog.id}`}>
          <h3>{blog.title}</h3>
          <p className="display-description">{blog.description}</p>
        </Link>
        <div className="d-flex justify-content-end">
          <button
            onClick={() => handleDelete(blog.id)}
            className="material-symbols-rounded"
          >
            delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default BlogCard;
