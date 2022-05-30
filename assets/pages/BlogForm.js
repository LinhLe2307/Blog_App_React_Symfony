import React from "react";

const BlogForm = ({
  title,
  image,
  description,
  setTitle,
  setImage,
  setDescription,
  handleSave,
  isSaving,
  buttonName,
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
            value={title}
            type="text"
            className="form-control"
            id="title"
            name="title"
            required
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
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            value={description}
            className="form-control"
            id="description"
            rows="3"
            name="description"
            required
          ></textarea>
        </div>
        <div></div>
        <button
          disabled={isSaving}
          onClick={handleSave}
          type="submit"
          className="btn btn-outline-primary mt-3"
        >
          {buttonName}
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
