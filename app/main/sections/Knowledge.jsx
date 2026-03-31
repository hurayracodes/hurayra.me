"use client";

import React from "react";
import { contributions, skillTags } from "../ui/Data";
import { Button } from "../ui/MovingBorders";

const Knowledge = () => {
  return (
    <div className="relative pt-10 px-6 lg:px-16 overflow-hidden min-h-screen">
      <div className="mt-8">
        <h2 className="text-white text-center text-2xl sm:text-3xl md:text-4xl font-bold">
          How I Can Contribute & My Key Skills
        </h2>
      </div>
      <div className="max-w-7xl mx-auto w-full">
        <div className="min-h-screen flex flex-col items-center justify-center text-white pb-12">
          <div className="w-full grid lg:grid-cols-4 grid-cols-1 gap-6">
            {contributions.map((card) => (
              <Button
                key={card.id}
                duration={Math.floor(Math.random() * 5000) + 5000}
                borderRadius="1.5rem"
                style={{
                  background: "rgb(4,7,29)",
                  backgroundImage:
                    "linear-gradient(90deg, rgba(4, 7, 29, 0.95) 0%, rgba(12, 14, 35, 0.95) 100%)",
                  borderRadius: "1.5rem",
                }}
                className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex w-full items-start p-5 gap-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                    <img
                      src={card.thumbnail}
                      alt={card.title}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-lg md:text-xl font-bold text-left text-cyan-200">
                      {card.title}
                    </h1>
                    <p className="text-gray-300 mt-2 tracking-tight font-normal text-sm md:text-base text-left leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;