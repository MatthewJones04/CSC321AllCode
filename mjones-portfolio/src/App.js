import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Container, Box } from "@mui/material";

export default function App() {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <Box id="hero">
          <Hero />
        </Box>

        <Box id="projects">
          <Projects />
        </Box>

        <Box id="about">
          <About />
        </Box>

        <Box id="contact">
          <Contact />
        </Box>

      </Container>

      <Footer />
    
    </>
  );
}

