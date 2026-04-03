"use client";
import { Testimonials } from "../ui/Testimonals";
import TitleHeader from "../ui/TitleHeader";

function Clients() {


  return (
    <div className="relative pt-10 px-4 sm:px-6 lg:px-12 overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-white text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
          Kind words <span className="text-cyan-200">from satisfied</span> clients

        </h2>
      </div>
            {/* <TitleHeader title=" Kind words from satisfied clients" /> */}

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}

export default Clients;

