import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BlogEdit = () => {
  const id = useParams().id;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const fetchBlog = () => {
    axios
      .get(`/api/blog/${id}`)
      .then((response) => {
        const blog = response.data;
        setTitle(blog.title);
        setImage(blog.image);
        setDescription(blog.description);
      })
      .catch((err) => console.log(err));
  };

  const handleSave = () => {
    axios
      .patch(`/api/blog/${id}`, {
        title: title,
        image: image,
        description: description,
      })
      .then((response) => {
        console.log(response);
        Swal.fire({
          icon: "success",
          title: "Project saved successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "An error occurred",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  useEffect(() => {
    fetchBlog();
  }, []);
  return (
    <>
      <div>BlogEdit</div>
      <form>
        <h1>
          <input
            type="text"
            name="title"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </h1>
        <p>
          <input
            type="text"
            name="image"
            defaultValue={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </p>
        <p>
          <textarea
            name="description"
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </p>
        <button type="submit" onClick={handleSave}>
          <Link to={`/show/${id}`}>Save</Link>
        </button>
      </form>
    </>
  );
};

export default BlogEdit;
