import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div>
      <footer className="relative overflow-hidden py-20 px-6 text-white bg-linear-to-br from-black/60 via-black/40 to-purple-700/40">
        <h2
          className="font-semibold text-xl text-white"
        >
          {"{ "}
          <span className="bg-linear-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent">
            Abu Hurayra
          </span>
          {" }"}
        </h2>
        {/* Divider */}
        <div className="border-t border-white/10 pt-6 text-center text-white/60 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="bg-linear-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent font-medium">
            Abu Hurayra
          </span>
          . All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
