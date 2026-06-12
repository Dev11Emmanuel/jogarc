import React from "react";
import { Building2, User, Mail, Lock } from "lucide-react";

import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-black text-white overflow-hidden">
      <div className="hidden md:flex md:w-2/3 relative items-center justify-center bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative z-10 px-12 max-w-xl">
          <h1 className="text-5xl font-bold leading-tight">
            Build Your
            <span className="text-yellow-400"> Future</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Join the modern real estate platform with luxury architecture and
            amazing experiences.
          </p>

          <div className="flex gap-5 mt-10">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl animate-bounce">
              <Building2 size={30} />
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl animate-bounce">
              🏗️
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl animate-bounce">
              🌆
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/3 flex items-center justify-center mt-20 px-6 bg-[#020617] relative">
        <div className="absolute w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 w-full max-w-sm bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold mb-2">Create Account</h2>

          <p className="text-gray-400 mb-8">Sign up to continue</p>

          <form className="space-y-5">
            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                required
              />

              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-white/10 border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-cyan-400"
                required
              />
            </div>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/10 border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-cyan-400"
              />
            </div>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="password"
                placeholder="Password"
                required
                className="w-full bg-white/10 border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-cyan-400"
              />
            </div>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="w-full bg-cyan-500 hover:bg-cyan-400 transition duration-300 py-3 rounded-xl font-semibold"
            >
              Create Account
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/10"></div>

            <span className="text-gray-400 text-sm">OR</span>

            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full flex items-center justify-center gap-3 bg-white text-black py-3 rounded-xl font-medium hover:scale-[1.02] transition duration-300"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
