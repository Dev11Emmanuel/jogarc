import React from "react";

const about = () => {
  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      <section className="pt-32 pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl m-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h1 className="font-medium mb-4 text-amber-400">ABOUT</h1>
                <h2 className="text-4xl md:text-6xl font-light mb-12">
                  Design Philosophy
                </h2>
                <div className="space-y-8">
                  <p className="text-lg leading-relaxed">
                    We believe architecture should enhance human experience
                    while respecting the natural environment. Our practice
                    focuses on creating spaces that are both functional and
                    poetic.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Founded in 2015, our studio has completed over 200 projects
                    across residential, commercial, and cultural sectors. Each
                    project begins with careful listening and ends with
                    thoughtful execution.
                  </p>
                </div>
              </div>
              <div className="space-y-12">
                <div>
                  <h3 className="font-medium mb-6 text-amber-400"> APPROACH</h3>
                  <div className="space-y-6">
                    <div className="border-l-2 pl-6">
                      <h4 className="text-lg font-medium mb-2">Research</h4>
                      <p> Deep understanding of context, culture and climate</p>
                    </div>
                    <div className="border-l-2 pl-6">
                      <h4 className="text-lg font-medium mb-2">
                        Collaboration
                      </h4>
                      <p>
                        {" "}
                        Close patnership with clients,engineers and craftspeople
                      </p>
                    </div>
                    <div className="border-l-2 pl-6">
                      <h4 className="tet-lg font-medium mb-2">Innovation</h4>
                      <p>
                        Sustainable materials and forward-thinking design
                        solutions
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-8 border-t border-border">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="mb-2">FOUNDED</h3>
                      <p className="text-xl">2015</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2">PROJECTS</h3>
                    <p className="text-xl">200+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
