import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const BlogList = () => {
  const [blogList, setBlogList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const title = useParams().title?.replaceAll("-", " ");

  const fetchBlogList = () => {
    axios
      .get("/api/blog")
      .then((response) => {
        setBlogList(response.data);
        setFilterList(response.data);
      })
      .catch((error) => console.log(error));
  };

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

  const filterBlogs = () => {
    const newList = blogList.filter((blog) => {
      return blog.title.toLowerCase().indexOf(title.toLowerCase()) !== -1;
    });
    console.log(newList);
    setFilterList(newList);
  };

  useEffect(() => {
    fetchBlogList();
  }, []);

  useEffect(() => {
    console.log("title", title);
    title ? filterBlogs() : setFilterList(blogList);
  }, [title]);

  return (
    <div>
      <Link to={`/create`}>+ New Post</Link>
      <ul className="blog-items">
        {filterList.map((blog) => {
          return (
            <li className="blog-item" key={blog.id}>
              <img className="container-img" src={blog.image} />
              <div className="blog-description">
                <h3>
                  <Link to={`/show/${blog.id}`}>{blog.title}</Link>
                </h3>
                <p>{blog.date.date.slice(0, 11)}</p>
                <p>{blog.description}</p>
                <button>
                  <Link to={`/show/${blog.id}`}>Read more</Link>
                </button>
                <button onClick={() => handleDelete(blog.id)}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogList;
