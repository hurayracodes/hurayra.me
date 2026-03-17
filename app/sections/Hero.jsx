"use client";
import { Code, Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import RotatingDecryptedText from "../ui/DecryptedText";
import RotatingText from "../ui/RotatingText";
import { StarsCanvas } from "../ui/StarsCanvas";
// import { Button } from "../ui/MovingBorders";

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
    <div className="relative pt-10 overflow-hidden bg-black/95 z-0">
      <StarsCanvas />

      <section className="min-h-screen flex items-center justify-center px-6 lg:px-10 text-white pt-20 pb-12 lg:pt-0 lg:pb-0">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex items-center justify-center max-w-4xl mx-auto w-full"
        >
          {/* Left Content - Now Centered */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8 w-full text-center"
          >
            {/* Main Heading */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4  font-mono"
            >
              {/* Line 3: That Delivers Results */}
              <h1 className="dev-name text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white/90 tracking-tight">
                I'm Abu Hurayra 
              </h1>
              {/* Line 1: Hurayra Build [rotating] */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white/90 tracking-tight">
              Build
                <div className="inline-flex items-center justify-center text-5xl md:text-6xl lg:text-7xl xl:text-8xl mx-2">
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
                    className="text-blue-400 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight tracking-tight"
                    parentClassName="inline-block"
                  />
                </div>
                <span>Code</span>
              </h1>
              
              {/* Line 2: That Delivers Results */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white/90 tracking-tight">
                That Delivers Results
              </h1>
              
            </motion.div>

            {/* Description - Centered */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-300 leading-relaxed max-w-2xl mx-auto text-lg md:text-xl font-light"
            >
              I'm Abu Hurayra, a passionate Software Developer and Founder of
              Anthrolit. I specialize in building fast, scalable, and secure web
              applications using the MERN Stack (MongoDB, Express, React,
              Node.js) and Next.js with over 2+ years of experience in creating
              modern, responsive web solutions.
            </motion.p>

            {/* Social Links - Centered */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 pt-4"
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
                  whileHover={{ scale: 1.1 }}
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
        </motion.div>
      </section>
    </div>
  );
}

export default Hero;