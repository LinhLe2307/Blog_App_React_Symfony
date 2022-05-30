import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import BlogForm from "./BlogForm";

const BlogEdit = () => {
  const id = useParams().id;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

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
        setIsSaving(false);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "An error occurred",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
      });
  };

  useEffect(() => {
    fetchBlog();
  }, []);
  return (
    <div className="container">
      <div>BlogEdit</div>
      <div className="card">
        <BlogForm
          title={title}
          image={image}
          description={description}
          setTitle={setTitle}
          setImage={setImage}
          setDescription={setDescription}
          handleSave={handleSave}
          isSaving={isSaving}
        />
      </div>
    </div>
  );
};

export default BlogEdit;
