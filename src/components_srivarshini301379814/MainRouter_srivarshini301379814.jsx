import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Nav from "./nav_srivarshini301379814";
import Home from "./home_srivarshini301379814";
import About from "./about_srivarshini301379814";
import Project from "./projects_srivarshini301379814";
import Services from "./services_srivarshini301379814";
import Contact from "./contact_srivarshini301379814";
import Footer from "./footer_srivarshini301379814";
const MainRouter = () => {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route index exact path="/" element={<Home />} />
          <Route index exact path="/about" element={<About />} />
          <Route index exact path="/project" element={<Project />} />
          <Route index exact path="/services" element={<Services />} />
          <Route index exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
export default MainRouter;
