import React from "react";

const Contact = () => {
  return (
    <section className="py-32 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx:auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <p className="mb-4 font-medium text-gray-500"> GET IN TOUCH</p>
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
                <h4 className="font-medium mb-6 text-gray-500"> FOLLOW US</h4>
                <div className="space-y-4">
                  <a className="block text-2xl font-semibold text-white hover:text-gray-500 transition-colors  cursor-pointer duration-300">
                    Instagram
                  </a>
                  <a className="block text-2xl font-semibold text-white  hover:text-gray-500 transition-colors cursor-pointer  duration-200">
                    Linkedin
                  </a>
                  <a className="block text-2xl font-semibold text-white hover:text-gray-500 transition-colors cursor-pointer duration-300">
                    Behance
                  </a>
                </div>
              </div>

              <div className="pt-12 border-t border-border">
                <p className="font-medium">
                  We approach each project with curiosity, rigor, and a
                  commitment to excellence. Our process begins with listening,
                  understanding your vision, and translating it into spaces that
                  exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
