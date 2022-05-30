import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import BlogCard from "./BlogCard";
import { exampleBlogs } from "../exampleBlogs";

const BlogList = () => {
  const title = useParams().title?.replaceAll("-", " ");
  const [blogList, setBlogList] = useState();
  const [filterList, setFilterList] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchBlogList = () => {
    setIsLoading(true);
    axios
      .get("/api/blog")
      .then((response) => {
        setBlogList(response.data);
        setFilterList(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const filterBlogs = () => {
    const newList = blogList?.filter((blog) => {
      return blog.title.toLowerCase().indexOf(title?.toLowerCase()) !== -1;
    });
    setFilterList(newList);
  };

  useEffect(() => {
    fetchBlogList();
  }, []);

  useEffect(() => {
    title ? filterBlogs() : setFilterList(blogList);
  }, [title, blogList]);

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
  if (isLoading) {
    return <p>...Loading</p>;
  }

  return (
    <div>
      <Link to={`/create`}>+ New Post</Link>
      <ul className="blog-items">
        {/* Display all the examples blogs when there are no blogs */}
        {blogList?.length === 0 &&
          exampleBlogs.map((exampleBlog) => (
            <BlogCard
              blog={exampleBlog}
              handleDelete={handleDelete}
              key={exampleBlog.id}
            />
          ))}

        {filterList?.map((blog) => {
          return (
            <BlogCard blog={blog} handleDelete={handleDelete} key={blog.id} />
          );
        })}
      </ul>
    </div>
  );
};

export default BlogList;
