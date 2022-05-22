import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as BrowserRouter,
  Router,
  Routes,
  Route,
} from "react-router-dom";
import BlogList from "./pages/BlogList";
import BlogCreate from "./pages/BlogCreate";
import BlogEdit from "./pages/BlogEdit";
import BlogShow from "./pages/BlogShow";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/create" element={<BlogCreate />} />
          <Route path="/edit/:id" element={<BlogEdit />} />
          <Route path="/show/:id" element={<BlogShow />} />
          <Route exact path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
