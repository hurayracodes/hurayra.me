"use client";

import React, { useState } from "react";
import {
  Braces,
  Code2,
  Server,
  Database,
  GitBranch,
  Github,
  Terminal,
  Cloud,
  Container,
  Figma,
  Palette,
  Workflow,
  Globe,
  Cpu,
  Layout,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const skillsData = [
  { name: "React.js", icon: Braces, color: "#61DAFB" },
  { name: "Next.js", icon: Code2, color: "#FFFFFF" },
  { name: "Node.js", icon: Server, color: "#339933" },
  { name: "Express.js", icon: Code2, color: "#FFFFFF" },
  { name: "MongoDB", icon: Database, color: "#47A248" },
  { name: "PostgreSQL", icon: Database, color: "#4169E1" },
  { name: "JavaScript", icon: Braces, color: "#F7DF1E" },
  { name: "TypeScript", icon: Braces, color: "#3178C6" },
  { name: "Tailwind CSS", icon: Palette, color: "#06B6D4" },
  { name: "Git", icon: GitBranch, color: "#F05032" },
  { name: "GitHub", icon: Github, color: "#FFFFFF" },
  { name: "VS Code", icon: Terminal, color: "#007ACC" },
  { name: "Vercel", icon: Cloud, color: "#FFFFFF" },
  { name: "Docker", icon: Container, color: "#2496ED" },
  { name: "AWS", icon: Cpu, color: "#FF9900" },
  { name: "Firebase", icon: Database, color: "#FFCA28" },
  { name: "Redux", icon: Workflow, color: "#764ABC" },
  { name: "Figma", icon: Figma, color: "#F24E1E" },
  { name: "GraphQL", icon: Globe, color: "#E10098" },
  { name: "Python", icon: Code2, color: "#3776AB" },
];

export function SkillCard({ skill, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />

      {/* Card Content */}
      <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-white/10 group-hover:border-cyan-500/50 transition-all duration-300">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <IconComponent className="w-7 h-7" style={{ color: skill.color }} />
          </div>

          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-xs font-medium text-cyan-300 text-center whitespace-nowrap"
              >
                {skill.name}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}