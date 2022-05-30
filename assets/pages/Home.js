import React from "react";
import BlogList from "./BlogList";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <img
          className="home-img"
          src="https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787"
        />
        <img
          className="home-img"
          src="https://images.unsplash.com/photo-1603400521630-9f2de124b33b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774"
        />
        <img
          className="home-img"
          src="https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776"
        />
        <h1 className="welcome-text">Welcome to my Blog App</h1>
      </div>
      <BlogList />
    </>
  );
};

export default Home;
