import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const BlogList = () => {
  const [blogList, setBlogList] = useState([]);

  const fetchBlogList = () => {
    axios
      .get("/api/blog")
      .then((response) => setBlogList(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => fetchBlogList(), []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to reverse this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, please delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/api/blog/${id}`)
          .then((response) => {
            Swal.fire({
              icon: "success",
              title: "Project deleted successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            fetchBlogList();
          })
          .catch((error) =>
            Swal.fire({
              icon: "error",
              title: "An error occurred",
              showConfirmButton: false,
              timer: 1500,
            })
          );
      }
    });
  };
  return (
    <div>
      <h1>Hllo</h1>
      <ul>
        {blogList.map((blog) => {
          return (
            <li key={blog.id}>
              <img src={blog.image} />
              <h3>{blog.title}</h3>
              <div>{blog.description}</div>
              <button>
                <Link to={`/show/${blog.id}`}>Show</Link>
              </button>
              <button onClick={() => handleDelete(blog.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogList;
