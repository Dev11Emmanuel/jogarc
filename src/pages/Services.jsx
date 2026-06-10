import React from "react";

const Services = () => {
  return (
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

          <h2 className="text-4xl font-light tracking-tight">RESIDENTIAL</h2>

          <p className="text-gray-400 text-lg leading-9 max-w-xl">
            Crafting homes that reflect individual lifestyles while maintaining
            architectural integrity
          </p>
        </div>

        <div className="space-y-6">
          <span className="text-amber-500 text-sm">02</span>

          <h2 className="text-4xl font-light tracking-tight">COMMERCIAL</h2>

          <p className="text-gray-400 text-lg leading-9 max-w-xl">
            Designing functional spaces that enhance business environments and
            user experiences
          </p>
        </div>

        <div className="space-y-6">
          <span className="text-amber-500 text-sm">03</span>

          <h2 className="text-4xl font-light tracking-tight">RENOVATION</h2>

          <p className="text-gray-400 text-lg leading-9 max-w-xl">
            Transforming existing structures with contemporary sensibilities and
            sustainable practices
          </p>
        </div>

        <div className="space-y-6">
          <span className="text-amber-500 text-sm">04</span>

          <h2 className="text-4xl font-light tracking-tight">CONSULTATION</h2>

          <p className="text-gray-400 text-lg leading-9 max-w-xl">
            Providing expert guidance on design direction, planning, and
            architectural solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
