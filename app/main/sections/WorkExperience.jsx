"use client";
import { BentoGrid } from "../ui/bento-grid";
import { expCards } from "../ui/Data";
import { motion } from "framer-motion";
import TitleHeader from "../ui/TitleHeader";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function WorkExperience() {
  return (
    <section
      id="work-experience"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      <TitleHeader title="My Professional Work Experience" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <BentoGrid items={expCards} />
      </div>
    </section>
  );
}

export default WorkExperience;
