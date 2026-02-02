import React from "react";
import { motion } from "framer-motion";
import WaveUnderline from "./WaveUnderline";

type Props = { parchmentStyle: string };

export default function WorkHistory({ parchmentStyle }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className={parchmentStyle + " w-full max-w-6xl mx-auto relative"}
      id="work-history"
    >
      <motion.div
        className="hidden md:block fixed top-20 right-4 lg:right-8 z-50 text-3xl lg:text-6xl"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        🧭
      </motion.div>

      <div className="text-center mb-6 md:mb-8">
        <motion.h2
          className="text-2xl md:text-4xl font-bold pirate-text mb-4"
          style={{ fontFamily: "Papyrus, fantasy" }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          ⚓ Voyage Chronicles
        </motion.h2>
        <WaveUnderline />
      </div>

      <div className="space-y-6 md:space-y-8">
        <motion.div
          whileHover={{ scale: 1.01, x: 10 }}
          className="bg-yellow-100 bg-opacity-60 border-2 border-yellow-700 rounded-lg p-4 md:p-6 shadow-lg relative"
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-yellow-700 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(124, 74, 3, 0.7)",
                "0 0 0 10px rgba(124, 74, 3, 0)",
                "0 0 0 0 rgba(124, 74, 3, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            Current
          </motion.div>

          <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
            <motion.div
              className="text-2xl md:text-4xl self-center sm:self-start"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              🏴‍☠️
            </motion.div>
            <div className="flex-1 w-full">
              <h3 className="text-xl md:text-2xl font-bold text-yellow-900 mb-2">
                Senior Frontend Developer
              </h3>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                <p className="text-base md:text-lg italic text-yellow-800 font-semibold">
                  Sabahna Technology Co. Ltd | 2024–Present
                </p>
                <motion.a
                  href="https://sabahna.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-700 bg-opacity-50 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold shadow-lg hover:bg-yellow-800 transition-all duration-300 group border-2 border-yellow-600 self-start"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 4px 12px rgba(124, 74, 3, 0.4)",
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="group-hover:-rotate-45 transition-transform duration-300"
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    ⛵️
                  </motion.span>
                  <span className="relative">
                    Set Sail
                    <motion.div
                      className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-yellow-200 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </motion.a>
              </div>

              <p className="text-sm md:text-base leading-relaxed mb-3">
                Contributed as a frontend developer, collaborating with a
                cross-functional team to build a{" "}
                <strong> social data analytics platform</strong> that provides
                insights into Facebook and TikTok pages. Designed intuitive
                dashboards that allow users to compare engagement, reach, and
                follower metrics across multiple social networks.
              </p>

              <p className="text-sm md:text-base leading-relaxed mb-3">
                Worked extensively with <strong>React.js</strong> for the
                frontend and <strong>NestJS</strong> for backend APIs,
                implementing <strong>Redux Toolkit (RTK) Query</strong> for
                efficient caching and invalidation. Delivered scalable,
                high-performance features that improved data load times by over
                40% and reduced redundant API calls.
              </p>

              <p className="text-sm md:text-base leading-relaxed mb-3">
                Collaborated on architectural decisions, enforced code quality
                standards, and mentored junior developers, ensuring best
                practices across the team.
              </p>

              <p className="text-sm md:text-base leading-relaxed mb-3">
                Also contributed to multiple other projects, including:
              </p>

              <ul className="list-disc list-inside text-sm md:text-base leading-relaxed mb-3 space-y-1">
                <li>
                  <strong>Nexxus Admin Panel</strong> — built reward system
                  dashboards that generate campaign QR codes for user
                  participation and prize tracking.
                </li>
                <li>
                  <strong>YamYam Myanmar</strong> — developed responsive landing
                  pages to increase brand visibility and improve lead
                  conversion.
                </li>
                <li>
                  <strong>Nexxus Application</strong> — supported frontend
                  development, ensuring a smooth user experience across mobile
                  and web platforms.
                </li>
              </ul>

              <div className="flex flex-wrap gap-1.5 md:gap-2 mt-4">
                <span className="bg-yellow-200 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium">
                  React.js / Next.js
                </span>
                <span className="bg-yellow-200 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium">
                  NestJS
                </span>
                <span className="bg-yellow-200 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium">
                  Redux Toolkit (RTK Query)
                </span>
                <span className="bg-yellow-200 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium">
                  Social Data Analytics
                </span>
                <span className="bg-yellow-200 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium">
                  Reward Systems
                </span>
                <span className="bg-yellow-200 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium">
                  Landing Pages
                </span>
                <span className="bg-yellow-200 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium">
                  Team Collaboration
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.01, x: 10 }}
          className="bg-yellow-100 bg-opacity-60 border-2 border-yellow-700 rounded-lg p-4 md:p-6 shadow-lg"
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
            <motion.div
              className="text-2xl md:text-4xl self-center sm:self-start"
              animate={{
                rotate: [0, 20, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              🗡️
            </motion.div>
            <div className="flex-1 w-full">
              <h3 className="text-xl md:text-2xl font-bold text-yellow-900 mb-2">
                Fullstack Apprentice
              </h3>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                <p className="text-base md:text-lg italic text-yellow-800 font-semibold">
                  B8 ICT Solution | 2024
                </p>
                <motion.a
                  href="https://b8ict.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-700 bg-opacity-50 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold shadow-lg hover:bg-yellow-800 transition-all duration-300 group border-2 border-yellow-600 self-start"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 4px 12px rgba(124, 74, 3, 0.4)",
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="group-hover:-rotate-45 transition-transform duration-300"
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    ⛵️
                  </motion.span>
                  <span className="relative">
                    Set Sail
                    <motion.div
                      className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-yellow-200 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </motion.a>
              </div>

              <p className="text-sm md:text-base leading-relaxed mb-3">
                Built responsive websites for small businesses using ReactJs,
                ShadCn, TailwindCss and NestJs, while mastering version control
                and agile development practices.
              </p>

              <p className="text-sm md:text-base leading-relaxed mb-3">
                Collaborated with designers to transform mockups into
                pixel-perfect, interactive web experiences. Gained expertise in
                cross-browser compatibility and mobile-first development
                approaches.
              </p>

              <div className="flex flex-wrap gap-1.5 md:gap-2 mt-4">
                <span className="bg-yellow-200 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium">
                  React.js / Next.js
                </span>
                <span className="bg-yellow-200 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium">
                  NestJS
                </span>
                <span className="bg-yellow-200 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium">
                  Redux Toolkit (RTK Query)
                </span>
                <span className="bg-yellow-200 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium">
                  TanStack
                </span>
                <span className="bg-yellow-200 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium">
                  Social Data Analytics
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.01, x: 10 }}
          className="bg-yellow-100 bg-opacity-60 border-2 border-yellow-700 rounded-lg p-4 md:p-6 shadow-lg"
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
            <motion.div
              className="text-2xl md:text-4xl self-center sm:self-start"
              animate={{
                rotate: [0, 15, -15, 0],
                y: [-2, 2, -2],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              ⚓
            </motion.div>
            <div className="flex-1 w-full">
              <h3 className="text-xl md:text-2xl font-bold text-yellow-900 mb-2">
                Full-Stack Navigator
              </h3>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                <p className="text-base md:text-lg italic text-yellow-800 font-semibold">
                  Prodigy Team Malaysia | 2022–2024
                </p>
                <motion.a
                  href="https://prodigy-team.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-700 bg-opacity-50 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold shadow-lg hover:bg-yellow-800 transition-all duration-300 group border-2 border-yellow-600 self-start"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 4px 12px rgba(124, 74, 3, 0.4)",
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="group-hover:-rotate-45 transition-transform duration-300"
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    ⛵️
                  </motion.span>
                  <span className="relative">
                    Set Sail
                    <motion.div
                      className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-yellow-200 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </motion.a>
              </div>

              <p className="text-sm md:text-base leading-relaxed mb-3">
                As a <strong>Senior Full-Stack Developer</strong>, I captained
                the engineering deck, mentoring junior shipmates while charting
                courses across multiple co-operator projects throughout Asia,
                including alliances with{" "}
                <a
                  href="https://ids-group.ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-700 hover:underline"
                >
                  IDS Group
                </a>
                . My voyages spanned from crafting intuitive UIs to securing
                servers against storms of cyber attackers.
              </p>

              <p className="text-sm md:text-base leading-relaxed mb-3">
                Armed with <strong>GoLang</strong> and <strong>Go-chi</strong>,
                I built resilient backends, while <strong>SQLC</strong> was my
                trusted compass for type-safe database queries. For frontend
                expeditions, I harnessed the power of <strong>React</strong>,{" "}
                <strong>SvelteKit</strong>, and <strong>RemixJS</strong>,
                delivering experiences smoother than a calm sea. When the tide
                called for rapid sails, <strong>Laravel</strong> joined the
                fleet to bring projects to harbor swiftly.
              </p>

              <p className="text-sm md:text-base leading-relaxed mb-3">
                Our databases—both <strong>SQL</strong> and{" "}
                <strong>PostgreSQL</strong>—were fortified like treasure vaults,
                optimized for speed and scalability. I enforced rigorous server
                maintenance, hardened security against intruders, and handled
                domain management like a vigilant quartermaster guarding the
                ship's map. Alongside, I built RESTful APIs, orchestrated data
                flows, and kept uptime at a steady 99.9%, ensuring the fleet
                never drifted off course.
              </p>

              <p className="text-sm md:text-base leading-relaxed mb-3">
                Whether it was launching 20+ e-commerce vessels, crafting
                dashboards for analytics, or steering high-traffic systems, I
                sailed with precision, always keeping the crew aligned and the
                projects on the horizon.
              </p>

              <div className="flex flex-wrap gap-1.5 md:gap-2 mt-4">
                <span className="bg-yellow-200 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium">
                  GoLang / Go-chi
                </span>
                <span className="bg-yellow-200 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium">
                  SQLC
                </span>
                <span className="bg-yellow-200 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium">
                  Laravel
                </span>
                <span className="bg-yellow-200 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium">
                  React / SvelteKit / RemixJS
                </span>
                <span className="bg-yellow-200 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium">
                  PostgreSQL / SQL
                </span>
                <span className="bg-yellow-200 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium">
                  Security & Domain Management
                </span>
                <span className="bg-yellow-200 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium">
                  Team Mentorship
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
