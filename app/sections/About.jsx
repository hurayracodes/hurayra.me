"use client";
import React from "react";
import DecayCard from "../ui/DecayCard";
import { Github, Linkedin, Mail } from "lucide-react";

function About() {
  return (
    <div className="relative pt-10 overflow-hidden">
      <canvas
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      <main className="min-h-screen flex items-center justify-center flex-col px-4 sm:px-6 lg:px-16 text-slate-300 pb-12">
        {/* Heading - Left aligned */}
        <div className="w-full max-w-7xl mx-auto mb-8 md:mb-12">
          <h1 className="text-white font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-left">
            LET ME{" "}
            <span className="text-cyan-200 font-extrabold text-2xl sm:text-3xl md:text-4xl">
              INTRODUCE
            </span>{" "}
            MYSELF
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto w-full">
          {/* Left side content */}
          <section className="space-y-6 font-normal text-justify order-2 lg:order-1 w-full tracking-tight text-base sm:text-lg">
            <p className="font-mono">
              Hi, I am{" "}
              <span className="text-cyan-200 font-bold text-lg sm:text-xl">
                Abu_Hurayra.
              </span>{" "}
              Nice to see you here.
            </p>

            <p>
              I fell in love with programming, my journey as a JavaScript
              Developer started with Simple Ideas and now I am building complex
              web applications. I am fluent in classics like Javascript and a
              deep expertise in <span className="text-cyan-200 font-bold text-lg sm:text-xl font-mono">full-stack development</span>
            </p>

            <p>
              I specialize transforming innovative ideas into reality. My skill
              spread out from dynamic frontend interfaces using React, Next.js,
              React.Native to robust backend solutions with Node.js, Express,
              and MongoDB.
            </p>

            <p>
              I'm committed to learning new things and working with others all
              the time, and I make sure that every project I work on is not only
              efficient and scalable, but also innovative.
            </p>
          </section>

          {/* Right side image with attached icons */}
          <section className="relative flex flex-col items-center justify-center order-1 lg:order-2 w-full">
            <div>
              {/* Image Card */}
              <DecayCard
                width={400}
                height={400}
                image="/hurayra.png"
                text="Abu Hurayra"
                className="relative rounded-full overflow-hidden"
              />
            </div>

            {/* Social Icons - Now attached below image */}
            <div className="flex relative items-center justify-center z-10 gap-6 mt-6">
              <a
                href="https://github.com/Abu-Hurayra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-transparent hover:bg-slate-950 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/abu-hurayra/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-transparent hover:bg-slate-950 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="mailto:abuhuraira@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-transparent hover:bg-slate-950 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default About;
