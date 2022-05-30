import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import BlogForm from "./BlogForm";

const BlogCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    if (title && description && image) {
      setIsSaving(true);
      let formData = new FormData();
      formData.append("title", title);
      formData.append("image", image);
      formData.append("description", description);
      axios
        .post("/api/blog", formData)
        .then(function (response) {
          Swal.fire({
            icon: "success",
            title: "Project saved successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsSaving(false);
          setTitle("");
          setImage("");
          setDescription("");
        })
        .catch(function (error) {
          // console.log(error.response.data);
          Swal.fire({
            icon: "error",
            title: "An error occurred",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsSaving(false);
        });
    }
  };
  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-3">Create New Project</h2>
      <div className="card">
        <div className="card-header">
          <Link className="btn btn-outline-info float-right" to="/blog">
            View All Blogs
          </Link>
        </div>
        <BlogForm
          title={title}
          image={image}
          description={description}
          setTitle={setTitle}
          setImage={setImage}
          setDescription={setDescription}
          handleSave={handleSave}
          isSaving={isSaving}
          buttonName="Save Blog"
        />
      </div>
    </div>
  );
};

export default BlogCreate;
