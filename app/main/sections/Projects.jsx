"use client"

import { useState } from "react"
import { Github, ExternalLink, Calendar, ArrowLeft, ArrowRight } from "lucide-react"
import { projects } from '../ui/Data'

export default function Projects() {
  // State to track current image index for each project
  const [currentImageIndex, setCurrentImageIndex] = useState({})

  const handlePrevImage = (projectId, e) => {
    e.stopPropagation()
    const project = projects.find(p => p.id === projectId)
    if (project && project.images) {
      setCurrentImageIndex(prev => ({
        ...prev,
        [projectId]: ((prev[projectId] || 0) - 1 + project.images.length) % project.images.length
      }))
    }
  }

  const handleNextImage = (projectId, e) => {
    e.stopPropagation()
    const project = projects.find(p => p.id === projectId)
    if (project && project.images) {
      setCurrentImageIndex(prev => ({
        ...prev,
        [projectId]: ((prev[projectId] || 0) + 1) % project.images.length
      }))
    }
  }

  const getCurrentImage = (project) => {
    if (project.images && project.images.length > 0) {
      const index = currentImageIndex[project.id] || 0
      return project.images[index]
    }
    return project.image
  }

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
      <div className="mb-20 text-center">
        <h2 className="text-white text-center text-2xl sm:text-3xl md:text-4xl font-bold">
          A small selection of recent projects
        </h2>
      </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden border border-white/10 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgb(4,7,29)",
                backgroundImage: "linear-gradient(90deg, rgba(4, 7, 29, 0.95) 0%, rgba(12, 14, 35, 0.95) 100%)",
                borderRadius: "0.75rem",
              }}
            >
              {/* Image with Counter and Navigation */}
              {(project.images || project.image) && (
                <div className="relative h-40 overflow-hidden group/image">
                  <img
                    src={getCurrentImage(project)}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Image Counter and Navigation - Bottom Right */}
                  <div className="absolute bottom-0  w-full justify-between bg-black/60 backdrop-blur-sm px-2 py-1 flex items-center gap-2">
                    <span className="text-white text-[10px] font-medium">
                      {(currentImageIndex[project.id] || 0) + 1} / {(project.images || [project.image]).length}
                    </span>
                    {(project.images && project.images.length > 1) && (
                      <div className="flex items-center gap-1">
                        <button 
                          onClick={(e) => handlePrevImage(project.id, e)}
                          className="w-5 h-5 text-white flex items-center justify-center transition-colors"
                        >
                        <ArrowLeft className="w-5 h-5"/> 
                        </button>
                        <button 
                          onClick={(e) => handleNextImage(project.id, e)}
                          className="w-5 h-5  text-amber-50 flex items-center justify-center transition-colors"
                        >
                        <ArrowRight className="w-5 h-5"/> 
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {project.title}
                </h3>
                
                {/* Duration */}
                {project.duration && (
                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{project.duration}</span>
                  </div>
                )}
                
                <p className="text-gray-400 text-xs mb-3 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                {project.tech && project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-700/50 text-gray-400">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-3 pt-2 border-t border-white/10">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2 py-1 rounded-md bg-slate-800/50 text-xs text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2 py-1 rounded-md bg-slate-800/50 text-xs text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}