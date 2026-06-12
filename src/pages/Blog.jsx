import React from "react";
import { GlobeOff } from "lucide-react";

const Blog = () => {
  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden ">
      <section className="items-center justify-center text-white flex flex-col gap-6 py-80">
        <GlobeOff size={48} />
        <h1 className=" font-bold text-7xl">404</h1>
        <h3 className="font-semibold text-5xl">Page Not Found </h3>
      </section>
    </div>
  );
};

export default Blog;
