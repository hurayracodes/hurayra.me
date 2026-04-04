"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Calendar, ArrowLeft, ArrowRight } from "lucide-react";

const tagColors = [
  "text-blue-400",
  "text-green-400",
  "text-purple-400",
  "text-pink-400",
  "text-yellow-400",
  "text-red-400",
  "text-indigo-400",
  "text-orange-400",
];

export const ProjectCard = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardRef = useRef(null);

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const getCurrentImage = () => {
    if (project.images && project.images.length > 0) {
      return project.images[currentImageIndex];
    }
    return project.image;
  };

  // Tilt effect handlers
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
className="sm:w-96 w-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bg-tertiary p-5 rounded-2xl transition-all duration-100"
        style={{
          background: "rgb(4,7,29)",
          backgroundImage: "linear-gradient(90deg, rgba(4, 7, 29, 0.95) 0%, rgba(12, 14, 35, 0.95) 100%)",
          transformStyle: "preserve-3d",
          transition: "transform 0.05s linear",
        }}
      >
        {/* Image Section - Fixed Height */}
        <div className="relative w-full h-[230px]">
          <img
            src={getCurrentImage()}
            alt={project.title}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* GitHub Icon - Top Right */}
          {project.github && (
            <div className="absolute top-3 right-3">
              <div
                onClick={() => window.open(project.github, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black/60 backdrop-blur-sm hover:bg-black/80 transition-all"
              >
                <Github className="w-5 h-5 text-white" />
              </div>
            </div>
          )}

          {/* Image Counter & Navigation - Bottom Center */}
          {(project.images && project.images.length > 1) && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center items-center gap-2">
              <button
                onClick={handlePrevImage}
                className="bg-black/60 backdrop-blur-sm hover:bg-black/80 text-white rounded-full p-1.5 transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <span className="text-white text-xs bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                {currentImageIndex + 1} / {project.images.length}
              </span>
              <button
                onClick={handleNextImage}
                className="bg-black/60 backdrop-blur-sm hover:bg-black/80 text-white rounded-full p-1.5 transition-all"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="mt-5 flex flex-col">
          <h3 className="text-white font-bold text-[24px] line-clamp-1">{project.title}</h3>
          
          {/* Duration */}
          {project.duration && (
            <div className="flex items-center gap-1 text-gray-400 text-sm mt-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{project.duration}</span>
            </div>)
          }
          
          <p className="mt-2 text-gray-400 text-[14px] leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tags Section */}
        <div className="mt-4 flex flex-wrap gap-2 min-h-[60px]">
          {project.tech && project.tech.map((tech, i) => (
            <p
              key={`${project.id}-${tech}`}
              className={`text-[14px] ${tagColors[i % tagColors.length]}`}
            >
              #{tech.toLowerCase().replace(/\s/g, '')}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};