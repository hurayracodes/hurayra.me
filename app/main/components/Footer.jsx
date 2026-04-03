"use client";

import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://github.com/Abu-Hurayra", icon: Github, label: "GitHub" },
    {
      href: "https://www.linkedin.com/in/abu-hurayra/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "https://www.instagram.com/", icon: Instagram, label: "Instagram" },
    { href: "mailto:abuhuraira3912l@gmail.com", icon: Mail, label: "Email" },
  ];

  return (
    <footer className="relative pt-16 mt-20">
      {/* Gradient border top */}
      <div className="max-w-6xl mx-auto">
        {/* Bottom Bar */}
        <div className="mt-8 relative pt-8">
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} <span className="text-cyan-400">Abu Hurayra</span>
              . All rights reserved.
            </p>
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a
                href="mailto:abuhuraira3912l@gmail.com"
                className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300"
              >
                Quick Email
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300"
              >
                View Resume
              </a>
            </div>
              <button className=" text-amber-50 px-4 py-2 relative overflow-hidden rounded-lg bg-linear-to-r from-purple-900/70 to-cyan-700/50 transition-all duration-300">Our Componet Website</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
