import React from "react";
import {
  MoveRight,
  PlayCircle,
  Layers2,
  MapPin,
  LayoutGrid,
  Heart,
  Building2,
  Users,
  Globe,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home({ projects }) {
  const navigate = useNavigate();
  return (
    <div className=" text-white overflow-x-hidden">
      <div className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
        <section className="relative h-screen flex items-center">
          <video
            autoPlay
            loop
            muted
            playInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="videoBg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/75"></div>
          <div className="relative  px-10 max-w-4xl">
            <div className="space-y-2">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                  Discover.
                </h1>
              </motion.div>

              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                className="overflow-hidden"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 leading-tight">
                  Inspire.
                </h1>
              </motion.div>

              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: "easeOut",
                }}
                className="overflow-hidden"
              >
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Build the Future.
                </h1>
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.8,
              }}
              className="text-gray-400 mt-6 text-lg max-w-xl"
            >
              Explore modern architecture from around the world and experience
              design like never before.
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
                <button
                  className=" bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold  hover:scale-105 transition flex flex-row items-center"
                  type="button"
                  onClick={() => navigate("/explore")}
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  Explore Buildings
                  <MoveRight size={18} className="mt-1" />
                </button>

                <button className="border border-white px-6 py-3 rounded-lg hover:scale-105 transition flex flex-row gap-2 items-center">
                  <a
                    href="https://youtu.be/2v_7UH_nLv4?si=2COYOmSjW622-zkn"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    className="flex flex-row items-center gap-2"
                  >
                    <PlayCircle size={35} />
                    Watch Video
                  </a>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="px-5 md:px-20 -mt-16 z-10 relative">
          <div className="bg-[#111] p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-4 backdrop-blur-lg">
            <input
              type="text"
              placeholder="Search buildings..."
              className="flex-1 p-3  bg-[#0a0a0a] rounded-lg outline-none"
            />
            <select className="p-3 bg-[#0a0a0a] rounded-lg">
              <option>Category</option>
              <option>Modern</option>
              <option>Minimalist</option>
            </select>
            <select className="p-2 items-center justify-around bg-[#0a0a0a] rounded-lg">
              <option>Location</option>
              <option>USA</option>
              <option>Dubai</option>
            </select>

            <button className="bg-yellow-500 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
              Search
            </button>
          </div>
        </div>
        <section className="px-6 md:px-20 mt-24">
          <h2 className="text-3xl font-bold mb-10">
            Featured <span className="text-yellow-500">Buildings</span>
          </h2>
          <div>
            <button className=" flex 0 ">View All</button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src="./build1.jpg"
                alt="building-one"
                className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-semibold">White Haven</h3>
                <span className="flex flex-row mt-1.5">
                  <MapPin className="text-amber-400" />

                  <p>Santorini, Greece</p>
                </span>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src="./build2.jpg"
                alt="building-two"
                className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

              <div className="absolute bottom-4 left-4 gap-7">
                <h3 className=" text-2xl font-semibold ">Glass House</h3>
                <span className="flex flex-row mt-1.5">
                  <MapPin className="text-amber-400" />
                  <p>California,USA</p>
                </span>
              </div>
              <div className="absolute bottom-8 right-4 gap-7"></div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src="./build3.jpg"
                alt="building-three"
                className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

              <div className="absolute bottom-4 left-4 gap-7 ">
                <h3 className="text-2xl font-semibold ">The Curve</h3>
                <span className="flex flex-row mt-1.5">
                  <MapPin className="text-amber-400" />
                  <p>Dubai,UAE</p>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className=" px-10 mt-20 ml-8 grid md:grid-cols-4 gap-6 text-center ">
          <div className="bg-[#141414] rounded-2xl p-5 flex items-center gap-6 border border-white/5">
            <Building2 size={65} className="text-yellow-400 " />

            <div>
              <h1 className="text-yellow-400 text-3xl font-bold">250+</h1>

              <p className="text-white font-semibold text-sm">Buildings</p>

              <span className="text-gray-400 text-xs">Curated Collection</span>
            </div>
          </div>

          <div className="bg-[#141414] rounded-2xl p-5 flex items-center gap-4 border border-white/5">
            <Users size={65} className="text-yellow-400 " />

            <div>
              <h1 className="text-yellow-400 text-2xl font-bold">120+</h1>

              <p className="text-white font-semibold text-sm">Architects</p>

              <span className="text-gray-400 text-xs">Featured Worldwide</span>
            </div>
          </div>

          <div className="bg-[#141414] rounded-2xl p-5 flex items-center gap-4 border border-white/5">
            <Globe size={65} className="text-yellow-400" />

            <div>
              <h1 className="text-yellow-400 text-2xl font-bold">45+</h1>

              <p className="text-white font-semibold text-sm">Countries</p>

              <span className="text-gray-400 text-xs">Global Reach</span>
            </div>
          </div>

          <div className="bg-[#141414] rounded-2xl p-5 flex items-center gap-4 border border-white/5">
            <Star size={65} className="text-yellow-400 " />

            <div>
              <h1 className="text-yellow-400 text-3xl font-bold">10K+</h1>

              <p className="text-white font-semibold text-sm">Happy Users</p>

              <span className="text-gray-400 text-xs">Growing Community</span>
            </div>
          </div>
        </section>
        {/* services */}
        <section className="bg-black text-white px-8 py-24">
          <div className="mb-24">
            <p className="text-sm tracking-[0.2em] text-amber-400 uppercase mb-6">
              Services
            </p>

            <h1 className="text-7xl font-extralight">
              What <span className="text-amber-400">We</span> Do
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-20">
            <div className="space-y-6">
              <span className="text-amber-500 text-sm">01</span>

              <h2 className="text-4xl font-light tracking-tight">
                RESIDENTIAL
              </h2>

              <p className="text-gray-400 text-lg leading-9 max-w-xl">
                Crafting homes that reflect individual lifestyles while
                maintaining architectural integrity
              </p>
            </div>

            <div className="space-y-6">
              <span className="text-amber-500 text-sm">02</span>

              <h2 className="text-4xl font-light tracking-tight">COMMERCIAL</h2>

              <p className="text-gray-400 text-lg leading-9 max-w-xl">
                Designing functional spaces that enhance business environments
                and user experiences
              </p>
            </div>

            <div className="space-y-6">
              <span className="text-amber-500 text-sm">03</span>

              <h2 className="text-4xl font-light tracking-tight">RENOVATION</h2>

              <p className="text-gray-400 text-lg leading-9 max-w-xl">
                Transforming existing structures with contemporary sensibilities
                and sustainable practices
              </p>
            </div>

            <div className="space-y-6">
              <span className="text-amber-500 text-sm">04</span>

              <h2 className="text-4xl font-light tracking-tight">
                CONSULTATION
              </h2>

              <p className="text-gray-400 text-lg leading-9 max-w-xl">
                Providing expert guidance on design direction, planning, and
                architectural solutions
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}

        <section className="bg-black text-white px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-7">
              <p className="text-sm uppercase tracking-[0.2em] text-amber-400 mb-6 ml-1">
                About
              </p>

              <h1 className="text-7xl font-extralight leading-none mb-14">
                Design Philosophy
              </h1>

              <div className="space-y-12 text-gray-400 text-xl leading-[1.8] max-w-4xl">
                <p>
                  We believe architecture should enhance human experience while
                  respecting the natural environment.
                </p>

                <p>
                  Founded in 2015, our studio has completed over 200 projects
                  across residential, commercial, and cultural sectors.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <p className="text-sm uppercase tracking-[0.2em] text-amber-400 mb-10">
                Approach
              </p>

              <div className=" border-b border-gray-700 pb-9 space-y-14">
                <div className="border-l  border-gray-700 pl-8">
                  <h3 className="text-3xl font-light mb-3">Research</h3>

                  <p className="text-gray-400 text-lg leading-8">
                    Deep understanding of context, culture, and climate
                  </p>
                </div>

                <div className="border-l border-gray-700 pl-8">
                  <h3 className="text-3xl font-light mb-3">Collaboration</h3>

                  <p className="text-gray-400 text-lg leading-8">
                    Close partnership with clients, engineers, and craftspeople
                  </p>
                </div>

                <div className="border-l border-gray-700 pl-8">
                  <h3 className="text-3xl font-light mb-3">Innovation</h3>

                  <p className="text-gray-400 text-lg leading-8">
                    Sustainable materials and forward-thinking design solutions
                  </p>
                </div>
              </div>
              <div className="pt-8 border-t border-border">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">
                      FOUNDED
                    </h4>
                    <p className="text-xl">2015</p>
                  </div>
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">
                      PROJECTS
                    </h4>
                    <p className="text-xl">200+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORKS SECTION */}
        <section className="py-30 bg-muted">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="mb-20">
                <p className="mb-4">
                  SELECTED
                  <span className="text-amber-500 ml-0.5">WORK</span>
                </p>

                <h3 className="text-4xl md:text-6xl font-light">
                  Our Projects
                </h3>
              </div>

              <div className="space-y-32">
                {projects.map((project, index) => (
                  <div key={index} className="group">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full   object-contain mx-auto transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    <div className="mt-8 grid md:grid-cols-3 gap-8">
                      <div>
                        <h4 className="text-2xl font-light mb-2">
                          {project.title}
                        </h4>

                        <p className="font-medium text-muted-foreground">
                          {project.location}
                        </p>
                      </div>

                      <div className="md:col-span-2">
                        <p className="font-medium md:ml-20 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx:auto">
              <div className="grid md:grid-cols-2 gap-20">
                <div>
                  <p className="mb-4 font-medium text-gray-500">
                    {" "}
                    GET IN TOUCH
                  </p>
                  <h3 className="text-4xl md:text-6xl font-light mb-12">
                    Let's Create Something <br /> Extraordinary
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="mb-2">EMAIL</h4>
                      <p>jogarc@studio.com</p>
                    </div>
                    <div>
                      <h4 className="mb-2"> PHONE</h4>
                      <p>+5 234 765-9800</p>
                    </div>
                    <div>
                      <h4 className="mb-2">STUDIO</h4>
                      <p className="text-xl not-italic">
                        123 Design Avenue <br /> New York, NY 10002
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-medium mb-6 text-gray-500">
                      {" "}
                      FOLLOW US
                    </h4>
                    <div className="space-y-4">
                      <p className="block text-2xl font-semibold text-white hover:text-gray-500 transition-colors  cursor-pointer duration-300">
                        Instagram
                      </p>
                      <p className="block text-2xl font-semibold text-white  hover:text-gray-500 transition-colors cursor-pointer  duration-200">
                        Linkedin
                      </p>
                      <p className="block text-2xl font-semibold text-white hover:text-gray-500 transition-colors cursor-pointer duration-300">
                        Behance
                      </p>
                    </div>
                  </div>

                  <div className="pt-12 border-t border-border">
                    <p className="font-medium">
                      We approach each project with curiosity, rigor, and a
                      commitment to excellence. Our process begins with
                      listening, understanding your vision, and translating it
                      into spaces that exceed expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
