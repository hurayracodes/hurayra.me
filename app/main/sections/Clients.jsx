"use client";
import { Testimonials } from "../ui/Testimonals";
import TitleHeader from "../ui/TitleHeader";

function Clients() {
  return (
    <div
      id="clients"
      className="relative pt-10 px-4 sm:px-6 lg:px-12 overflow-hidden min-h-screen flex flex-col items-center justify-center"
    >
      {/* Heading */}
      <TitleHeader title="Kind words from" subTitle=" satisfied clients" />
      {/* reivews */}
      <Testimonials />
    </div>
  );
}

export default Clients;
