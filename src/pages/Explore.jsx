import React from "react";
import {
  MoveRight,
  PlayCircle,
  MapPin,
  Heart,
  Building2,
  Users,
  Globe,
  Star,
  Compass,
  StickyNote,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const Explore = ({ works }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "RESIDENTIAL",
    "COMMERCIAL",
    "HOSPITALITY",
    "CULTURAL",
  ];

  const filteredProjects = Array.isArray(works)
    ? activeCategory === "All"
      ? works
      : works.filter((works) => works.category === activeCategory)
    : [];

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      <section className="relative h-screen flex items-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="videoBg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative px-10 max-w-4xl">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <h1 className="text-8xl md:text-6xl font-bold leading-tight">
              OUR <br />
              <span className="text-yellow-500 text-8xl">WORK.</span> <br />
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
            className="text-gray-400 mt-6 text-lg max-w-xl"
          >
            A curated selection of our architectural projects, each telling a
            unique story through thoughtful design and meticulous attention to
            detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="border border-white px-6 py-3 rounded-lg bg-transparent hover:bg-amber-400 text-white scale-105 transition ">
                <a
                  href="https://youtu.be/2v_7UH_nLv4?si=2COYOmSjW622-zkn"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                  className="flex items-center gap-2"
                >
                  <PlayCircle size={30} />
                  Watch Video
                </a>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-8 justify-center md:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-minimal transition-colors duration-300 relative group ${
                    activeCategory === category
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}

                  <span
                    className={`absolute bottom-0 left-0 w-full h-px bg-foreground transition-transform duration-300 origin-left ${
                      activeCategory === category
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
              {filteredProjects.map((project, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden mb-8 rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Category Badge */}
                    <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-md">
                      <span className="text-minimal text-foreground">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-light text-architectural mb-2 group-hover:text-muted-foreground transition-colors duration-500">
                        {project.title}
                      </h3>

                      <p className="text-minimal text-muted-foreground">
                        {project.location}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex gap-8 pt-4 border-t border-border">
                      <div>
                        <p className="text-minimal text-muted-foreground mb-1">
                          AREA
                        </p>

                        <p className="text-foreground">{project.area}</p>
                      </div>

                      <div>
                        <p className="text-minimal text-muted-foreground mb-1">
                          YEAR
                        </p>

                        <p className="text-foreground">{project.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-32 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-architectural mb-8">
              Ready to Start
              <br />
              Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Let's discuss how we can bring your architectural vision to life
            </p>
            <a
              href="#contact"
              className="inline-block text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300 relative group"
            >
              GET IN TOUCH
              <span className="absolute bottom-0 left-0 w-full h-px bg-foreground group-hover:bg-muted-foreground transition-colors duration-300"></span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
