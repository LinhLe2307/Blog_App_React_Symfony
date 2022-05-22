import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Layout from "../components/Layout";
import Swal from "sweetalert2";
import axios from "axios";
import Body from "./Body";

const BlogCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
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
        Swal.fire({
          icon: "error",
          title: "An error occurred",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
      });
  };
  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-3">Create New Project</h2>
      <div className="card">
        <div className="card-header">
          <Link className="btn btn-outline-info float-right" to="/">
            View All Project
          </Link>
        </div>
        <div className="card-body">
          <form>
            <div className="body-group">
              <label htmlFor="title">Title</label>
              <input
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                value={title}
                type="text"
                className="form-control"
                id="title"
                name="title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image URL</label>
              <input
                onChange={(event) => {
                  setImage(event.target.value);
                }}
                value={image}
                type="text"
                className="form-control"
                id="image"
                name="image"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                value={description}
                type="text"
                className="form-control"
                id="description"
                rows="3"
                name="name"
              ></textarea>
            </div>
            <button
              disabled={isSaving}
              onClick={handleSave}
              type="button"
              className="btn btn-outline-primary mt-3"
            >
              Save Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogCreate;
