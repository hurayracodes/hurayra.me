"use client";
import { Code, Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import RotatingDecryptedText from "../ui/DecryptedText";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function Hero() {
  return (
    <div className="relative pt-6 overflow-hidden z-0 min-h-screen">

      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-10 text-white pt-20 pb-12 lg:pt-0 lg:pb-0 z-20 sm:p-3">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex items-center justify-center max-w-5xl mx-auto w-full"
        >
          {/* Content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6 w-full text-center"
          >
            {/* Main Heading */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-2 font-mono main-heading"
            >
              {/* Line 1: I'm Abu Hurayra */}
              <h1 className="text-5xl sm:text-lg  md:text-6xl lg:text-7xl xl:text-8xl text-white/90 tracking-tight font-semibold name-heading">
                I'm Abu Hurayra
              </h1>

              {/* Line 2: Build + Rotating Text + Code */}
              <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white/90 tracking-tight font-extralight">
                Build{" "}
                <span className="inline-flex items-center rotating-text justify-center text-5xl md:text-6xl lg:text-7xl xl:text-8xl mx-2">
                  <RotatingDecryptedText
                    texts={[
                      "UI/UX Design",
                      "Backend Logic",
                      "Debug Issues",
                      "Fast Solutions",
                    ]}
                    animateOn="auto"
                    rotationInterval={3000}
                    speed={40}
                    revealDirection="start"
                    encryptedClassName="opacity-40"
                    className="text-cyan-400 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight tracking-tight"
                    parentClassName="inline-block"
                  />
                </span>{" "}
                <span>That </span>
              </h1>

              {/* Line 3: That Delivers Results */}
              <h1 className="text-3xl sm:text-4xl  md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-white/90 tracking-tight">
                Delivers Results
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-300 description-text text-2xl max-w-3xl mx-auto md:text-xl"
            >
              A passionate Full Stack Developer who turns complex problems into
              simple, elegant solutions. I build web applications that users
              actually love to use.
            </motion.p>
            <div className="flex gap-3 justify-center items-center">
               <button className="px-10 py-5 bg-linear-to-r from-purple-900 to-cyan-700 rounded-full text-white font-medium flex items-center gap-2 hover:opacity-90 transition-opacity text-lg sm:text-xl shadow-lg">
                View Resume
              </button>{" "}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Hero;
