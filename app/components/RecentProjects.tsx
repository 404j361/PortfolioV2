"use client";

import React from "react";
import { motion } from "framer-motion";
import WaveUnderline from "./WaveUnderline";
import { LetterDialogTrigger } from "@/components/Dialog";
import { PROJECT_KEYS, projects } from "./projects";

type Props = {
  parchmentStyle: string;
};

export default function RecentProjects({ parchmentStyle }: Props) {
  const projectList = [
    projects[PROJECT_KEYS.SOCIAL_METRICA],
    projects[PROJECT_KEYS.LIFI_AI],
    projects[PROJECT_KEYS.YUMYUM],
    projects[PROJECT_KEYS.KEYBOARD_QUIZ],
    projects[PROJECT_KEYS.ALCHEMIST_ACADEMY],
    projects[PROJECT_KEYS.ZAY_MARKETS],
    projects[PROJECT_KEYS.BAHOZAY],
    projects[PROJECT_KEYS.FLAIM],
  ];

  return (
    <motion.section
      id="recent-projects"
      className={parchmentStyle + " w-full max-w-6xl relative"}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      {/* Floating Compass */}
      <motion.div
        className="fixed top-20 right-8 z-50 text-6xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        🧭
      </motion.div>

      {/* Section Header */}
      <div className="text-center mb-8">
        <motion.h2
          className="text-4xl font-bold pirate-text mb-4"
          style={{ fontFamily: "Papyrus, fantasy" }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          🏴‍☠️ Recent Treasure Hunts
        </motion.h2>
        <WaveUnderline />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectList.map((p, index) => (
          <motion.div
            key={p.title}
            className="bg-yellow-100 bg-opacity-70 border-3 border-yellow-700 rounded-lg p-6 shadow-lg relative overflow-hidden flex flex-col justify-between min-h-[420px]"
            whileHover={{ scale: 1.03, rotateY: index % 2 === 0 ? 5 : -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Floating Icon */}
            <motion.div
              className="absolute -top-2 -right-2 text-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              ⚓
            </motion.div>

            <div>
              <h3 className="text-xl font-bold text-yellow-900 mb-3">
                {p.title}
              </h3>

              <p className="text-sm text-yellow-800 mb-3 font-semibold">
                {p.tech}
              </p>

              <p className="text-base leading-relaxed mb-4">{p.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-auto">
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center text-center items-center gap-1 px-3 py-1.5 bg-yellow-700 text-yellow-50 text-sm font-semibold rounded-md shadow-md hover:bg-yellow-800 hover:scale-105 transform transition-all duration-300"
                >
                  🦜 Set Sail!
                </a>
              ) : (
                <button className="flex justify-center items-center gap-1 px-3 py-1.5 bg-yellow-700 text-yellow-50 text-sm font-semibold rounded-md shadow-md cursor-not-allowed opacity-70">
                  🦜 Authorized Crew Only
                </button>
              )}

              <LetterDialogTrigger
                title={`Captain's Log: ${p.title}`}
                dialog={p.dialog}
              >
                <button className="flex items-center justify-center w-full gap-1 px-3 py-1.5 bg-yellow-100 bg-opacity-80 text-yellow-900 text-sm font-semibold rounded-md border-2 border-yellow-700 shadow-md hover:bg-yellow-200 hover:scale-105 transform transition-all duration-300">
                  🗺 Map
                </button>
              </LetterDialogTrigger>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
