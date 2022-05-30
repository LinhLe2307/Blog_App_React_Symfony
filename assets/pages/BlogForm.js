import React from "react";

const BlogForm = ({
  title,
  image,
  description,
  setTitle,
  setImage,
  setDescription,
  handleSave,
  isSaving
}) => {
  return (
    <div className="card-body">
      <form>
        <div className="body-group">
          <label htmlFor="title">Title</label>
          <input
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            defaultValue={title}
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
            defaultValue={image}
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
            defaultValue={description}
            type="text"
            className="form-control"
            id="description"
            rows="3"
            name="description"
          ></textarea>
        </div>
        <div></div>
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
  );
};

export default BlogForm;
