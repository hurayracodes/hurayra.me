"use client";
import React, { useState, useEffect } from "react";

// SVG Icons Array - Replace with your actual SVG paths
const ICONS = [
  { name: "Next.js", svg: "/icons/nextjs.svg", color: "#FFFFFF" },
  { name: "JavaScript", svg: "/icons/javascript.svg", color: "#F7DF1E" },
  { name: "Express.js", svg: "/icons/express.svg", color: "#FFFFFF" },
  { name: "React.js", svg: "/icons/reactjs.svg", color: "#61DAFB" },
  { name: "Node.js", svg: "/icons/nodejs.svg", color: "#339933" },
  { name: "MongoDB", svg: "/icons/mongodb.svg", color: "#47A248" },
  { name: "TypeScript", svg: "/icons/typescript.svg", color: "#3178C6" },
  { name: "Tailwind CSS", svg: "/icons/tailwind.svg", color: "#06B6D4" },
  { name: "Git", svg: "/icons/git.svg", color: "#F05032" },
  { name: "VS Code", svg: "/icons/vscode.svg", color: "#007ACC" },
  { name: "GitHub", svg: "/icons/github.svg", color: "#FFFFFF" },
  { name: "Vercel", svg: "/icons/vercel.svg", color: "#FFFFFF" },
];

function SemiCircleOrbit({ radius, centerX, centerY, count, iconSize }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => {
        const angle = (index / (count - 1)) * 180;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        const iconData = ICONS[index % ICONS.length];

        const tooltipAbove = angle > 90;

        return (
          <div
            key={index}
            className="absolute flex flex-col items-center group"
            style={{
              left: `${centerX + x - iconSize / 2}px`,
              top: `${centerY - y - iconSize / 2}px`,
              zIndex: 5,
            }}
          >
            <div
              className="rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer border border-white/10"
              style={{ width: iconSize, height: iconSize }}
            >
              <img
                src={iconData.svg}
                alt={iconData.name}
                className="w-5 h-5 md:w-6 md:h-6 object-contain"
                style={{ filter: iconData.name === "Next.js" || iconData.name === "Express.js" || iconData.name === "GitHub" || iconData.name === "Vercel" ? "brightness(0) invert(1)" : "none" }}
              />
            </div>

            {/* Tooltip */}
            <div
              className={`absolute ${
                tooltipAbove ? "bottom-[calc(100%+8px)]" : "top-[calc(100%+8px)]"
              } hidden group-hover:block rounded-lg bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 text-xs text-white shadow-lg text-center border border-white/10 whitespace-nowrap z-20`}
            >
              {iconData.name}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-gray-900/90 border border-white/10 ${
                  tooltipAbove ? "top-full -mt-1" : "bottom-full -mb-1"
                }`}
              ></div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default function MultiOrbitSemiCircle() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Responsive sizing
  const baseWidth = Math.min(size.width * 0.85, 800);
  const centerX = baseWidth / 2;
  const centerY = baseWidth * 0.45;

  const iconSize =
    size.width < 480
      ? 42
      : size.width < 768
      ? 48
      : 56;

  return (
    <div className="relative w-full overflow-visible py-8">
      <div className="w-full flex flex-col items-center justify-center relative">
        <div
          className="relative mx-auto overflow-visible"
          style={{ 
            width: baseWidth, 
            height: baseWidth * 0.7,
            minHeight: '400px',
            maxHeight: '550px'
          }}
        >
          {/* Glow background */}
          <div className="absolute inset-0 flex justify-center pointer-events-none">
            <div
              className="w-[90%] h-[90%] rounded-full 
                bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent_70%)]
                dark:bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_70%)]
                blur-2xl"
              style={{ zIndex: 0 }}
            />
          </div>

          <SemiCircleOrbit 
            radius={baseWidth * 0.22} 
            centerX={centerX} 
            centerY={centerY} 
            count={7} 
            iconSize={iconSize} 
          />
          <SemiCircleOrbit 
            radius={baseWidth * 0.38} 
            centerX={centerX} 
            centerY={centerY} 
            count={9} 
            iconSize={iconSize} 
          />
          <SemiCircleOrbit 
            radius={baseWidth * 0.52} 
            centerX={centerX} 
            centerY={centerY} 
            count={11} 
            iconSize={iconSize} 
          />
        </div>
      </div>
    </div>
  );
}