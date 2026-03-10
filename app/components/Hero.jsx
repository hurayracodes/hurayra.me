"use client";
import { Code, Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import RotatingDecryptedText from "../ui/DecryptedText";
import RotatingText from "../ui/RotatingText";

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

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Hero() {
  return (
    <div className="relative pt-10 overflow-hidden">
      <canvas
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      <section className="min-h-screen flex items-center justify-center px-6 lg:px-16 text-white pt-20 pb-12 lg:pt-0 lg:pb-0">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto w-full"
        >
          {/* Left Content - Width increased */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8 order-2 lg:order-1 w-full lg:max-w-2xl xl:max-w-3xl"
          >
            {/* Main Heading */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 md:w-full"
            >
              <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">
                Shaping{" "}
                <div className="inline-flex items-center">
                  <RotatingText
                    texts={["Ideas", "Concepts", "Designs", "Code"]}
                    mainClassName="px-3 py-1.5 text-cyan-200"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </div>
              </h1>
              <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">
                into Real Projects{" "}
              </h1>
              <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">
                that Deliver Results
              </h1>
              {/* <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
                <span className="text-blue-400 inline-block">
                  <RotatingDecryptedText
                    texts={[
                      "MERN Stack Developer",
                      "Software Developer",
                      "Founder HurayraCodes",
                    ]}
                    animateOn="auto"
                    rotationInterval={3000}
                    speed={40}
                    revealDirection="start"
                    encryptedClassName="opacity-70"
                    className="text-blue-400 text-5xl md:text-4xl lg:text-5xl xl:text-6xl sm:text-3xl sd:text-2xl font-bold"
                    parentClassName="inline-block"
                  />
                </span>
              </h1> */}
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-400 leading-relaxed max-w-2xl lg:max-w-3xl text-lg lg:text-xl"
            >
              I’m Abu Hurayra, a passionate Software Developer and Founder of
              Anthrolit. I specialize in building fast, scalable, and secure web
              applications using the ( MongoDB, Express, React, Node.js &
              Next.js) with over 2+ years of experience in building modern,
              responsive web applications.
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              {[
                {
                  icon: Code,
                  href: "https://github.com/hurayracodes/abuhurayra",
                  label: "Code",
                },
                {
                  icon: Instagram,
                  href: "https://instagram.com/hurayracodes/",
                  label: "instagram",
                },
                {
                  icon: Github,
                  href: "https://github.com/hurayracodes",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/hurayracodes/",
                  label: "LinkedIn",
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whilehover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl border border-white/10 hover:border-blue-400 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 backdrop-blur-sm"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SECTION */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex justify-center order-1 lg:order-2 w-full"
          >
            <div className="code-panel overflow-hidden rounded-xl border border-slate-200/20 shadow-xl w-full max-w-md">
              <div className="code-header flex items-center gap-1 px-4 py-3 bg-gray-950/70 border-b border-slate-700/30">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
                <span className="ml-2 text-sm font-medium text-slate-300">
                  Abu Hurayra.terminal
                </span>
              </div>

              <div className="space-y-4 p-5">
                <div className="space-y-1 border border-slate-200/20 bg-linear-to-b from-cyan-950/40 to-slate-800/20 p-4 rounded-2xl text-sm leading-relaxed text-slate-400">
                  <p className="text-emerald-200">~ $ whoami</p>
                  <p>abuhurara</p>
                  <p className="text-emerald-200">~ $ cat about.json</p>
                  <p className="text-lg text-red-400">{" { "}</p>
                  <p>
                    <span>"role": </span> {'"Full Stack Developer",'}
                  </p>
                  <p>
                    {
                      '  "likes":   ["JavaScript", "mern stack", "next js", "python" ]'
                    }
                  </p>
                  <p className="text-2xl text-red-400">{" } "}</p>
                  <p className="text-emerald-200 flex gap-2 items-center">
                    ~ $ ping me{" "}
                    <span className="w-1 h-4 bg-emerald-200 animate-pulse"></span>
                  </p>
                  <p>
                    <span>email: </span>{" "}
                    <span className="underline break-all">
                      "abuhuraira3912l@gmail.com"
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Hero;
