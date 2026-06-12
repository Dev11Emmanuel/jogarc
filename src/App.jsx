import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./components/Login";
import Explore from "./pages/Explore";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import { useState } from "react";

function App() {
  // const [darkMode, setDarkMode] = useState(true);
  const projects = [
    {
      image: "build7.jpg",
      title: "MINIMAL RESIDENCE",
      location: "NEW YORK 2023",
      description:
        "A contemporary home focusing on light, space, and material honesty",
    },
    {
      image: "./build5.jpg",
      title: "CORPORATE HEADQUATERS",
      location: "LONDON 2023",
      description:
        "Modern office space emphasizing collaboration and natural elements",
    },
    {
      image: "./build9.jpg",
      title: "MINIMAL RESIDENCE",
      location: "NEW YORK 2023",
      description:
        "A contemporary home focusing on light, space, and material honesty",
    },
  ];
  const works = [
    {
      image: "./build2.jpg",
      title: "MINIMAL RESIDENCE",
      location: "NEW YORK, 2023",
      category: "RESIDENTIAL",
      description:
        "A contemporary home focusing on light, space, and material honesty. The design emphasizes clean lines and natural materials.",
      area: "450 SQM",
      year: "2024",
    },
    {
      image: "build3.jpg",
      title: "CORPORATE HEADQUATERS",
      location: "LONDON, 2023",
      category: "RESIDENTIAL",
      description:
        "Modern office space emphasizing collaboration and natural elements. Features flexible workspaces and sustainable design principles.",
      area: "5000 SQM",
      year: "2023",
    },
    {
      image: "build4.jpg",
      title: "CULTURAL CENTER",
      location: "TOKYO, 2023",
      category: "COMMERCIAL",
      description:
        "Public architecture that bridges tradition with contemporary design. A space for community gathering and cultural exchange.",
      area: "800 SQM",
      year: "2023",
    },
    {
      image: "build5.jpg",
      title: "GALLERY SPACE",
      location: "PARIS, 2022",
      category: "CULTURAL",
      description:
        "Minimalist gallery designed to showcase art without distraction. Pure white spaces with carefully controlled lighting.",
      area: "600 SQM",
      year: "2022",
    },
    {
      image: "build6.jpg",
      title: "BOUTIQUE HOTEL",
      location: "MILAN,2023",
      category: "HOSPITALITY",
      description:
        "Luxury hospitality redefined through architectural restraint. Every detail carefully considered for guest experience.",
      area: "2400 SQM",
      year: "2023",
    },
    {
      image: "build8.jpg",
      title: " EQUITY TOWER",
      location: "DUBAI, 2024",
      category: "COMMERCIAL",
      description:
        "A sleek skyscraper that reimagines the urban skyline. Innovative use of glass and steel creates a dynamic presence.",
      area: "10000 SQM",
      year: "2024",
    },
  ];
  return (
    <Router>
      <Navbar />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home projects={projects} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/explore" element={<Explore works={works} />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
