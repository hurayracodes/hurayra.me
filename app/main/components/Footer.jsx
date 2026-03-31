import React from "react";
import { motion } from "framer-motion";
import { Code, Github, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <section className="p-10">
      <div className="container text-neutral-300 flex sm:justify-between mx-auto justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
         <span className="font-bold text-cyan-300">
            {" { "}
            Abu Hurayra 
          {" } "}
          </span> © {new Date().getFullYear()}. All rights reserved.
        </p>
        {/* Social Links - Adjusted spacing */}
                    <div
                      className="flex gap-5 flex-wrap"
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
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          className="p-3 rounded-xl border border-white/10 hover:border-blue-400 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 backdrop-blur-sm"
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
      </div>
      </section>
  );
}

export default Footer;
