"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Bottle } from "./components/icons";

const parchmentStyle =
    "bg-[url('https://www.transparenttextures.com/patterns/old-mathematics.png')] bg-[#f5e9c6] border-4 border-yellow-700 rounded-xl shadow-xl p-8 mb-10";

const WaveUnderline = () => (
    <motion.div
        className="flex justify-center mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5 }}
    >
        <svg
            width="80"
            height="12"
            viewBox="0 0 80 12"
            className="text-yellow-700"
        >
            <motion.path
                d="M0,6 Q10,0 20,6 T40,6 T60,6 T80,6"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.path
                d="M0,8 Q10,4 20,8 T40,8 T60,8 T80,8"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
                opacity="0.6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
            />
        </svg>
    </motion.div>
);

export default function Home() {
    return (
        <main className="min-h-screen text-[#7c4a03] font-pirate p-8 flex flex-col items-center relative overflow-hidden">
            <motion.div
                className="fixed top-20 right-8 z-50 text-6xl"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                }}
            >
                🧭
            </motion.div>

            <motion.div
                className="fixed top-32 left-8 z-50 text-4xl"
                animate={{ y: [-10, 10, -10] }}
                transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            >
                💰
            </motion.div>

            <motion.div
                className="fixed bottom-20 right-16 z-50 text-5xl"
                animate={{
                    rotate: [-5, 5, -5],
                    y: [-5, 5, -5],
                }}
                transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            >
                🚢
            </motion.div>

            {/* About Me Section */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className={
                    parchmentStyle +
                    " w-full max-w-4xl flex flex-col items-center relative overflow-hidden"
                }
            >
                <motion.div
                    className="absolute top-4 left-4 text-2xl opacity-30"
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                >
                    🪙
                </motion.div>
                <motion.div
                    className="absolute top-8 right-8 text-xl opacity-30"
                    animate={{ rotate: -360, y: [-10, 10, -10] }}
                    transition={{
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                >
                    💎
                </motion.div>
                <motion.div
                    className="absolute bottom-4 left-8 text-2xl opacity-30"
                    animate={{ rotate: 360, x: [-5, 5, -5] }}
                    transition={{
                        duration: 7,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                >
                    ⚱️
                </motion.div>

                <div className="text-center mb-8">
                    <motion.h1
                        className="text-5xl md:text-6xl font-black pirate-text mb-4 text-center drop-shadow-lg"
                        style={{ fontFamily: "Papyrus, fantasy" }}
                        animate={{
                            textShadow: [
                                "2px 2px 4px rgba(0,0,0,0.3)",
                                "4px 4px 8px rgba(0,0,0,0.5)",
                                "2px 2px 4px rgba(0,0,0,0.3)",
                            ],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    >
                        🏴‍☠️ Captain Jinn
                    </motion.h1>
                    <WaveUnderline />
                    <p className="text-xl italic text-yellow-900 font-semibold">
                        Full-Stack Voyager & Cyber Pathfinder
                    </p>
                </div>

                <div className="relative mb-8">
                    <motion.div
                        className="absolute -inset-4 border-2 border-dashed border-yellow-600 rounded-full opacity-50"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 30,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    ></motion.div>
                    <img
                        src="/images/avatar.webp"
                        alt="Captain Jinn"
                        className="w-40 h-40 rounded-full border-6 border-yellow-700 shadow-2xl relative z-10"
                    />
                    <motion.div
                        className="absolute -top-2 -right-2 text-3xl"
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    >
                        ⚓
                    </motion.div>
                    <motion.div
                        className="absolute -bottom-2 -left-2 text-3xl"
                        animate={{
                            rotate: [-10, 10, -10],
                            y: [-2, 2, -2],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    >
                        🦜
                    </motion.div>
                    <motion.div
                        className="absolute -top-4 left-4 text-2xl"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 12,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    >
                        ⭐
                    </motion.div>
                    <motion.div
                        className="absolute -bottom-4 right-4 text-2xl"
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    >
                        🗡️
                    </motion.div>
                </div>

                <div className="max-w-2xl text-center">
                    <p className="text-lg leading-relaxed mb-4">
                        <span className="font-semibold text-yellow-900">
                            Ahoy there, matey!
                        </span>{" "}
                        I be Captain Jinn, a full-stack code corsair who's been
                        sailin’ the digital seas for years, chartin’ courses
                        through stormy deadlines and discoverin’ hidden
                        treasures in modern web development. From the coast o’
                        Thailand to far-off foreign ports, I’ve served with
                        global crews, leadin’ expeditions into the uncharted
                        waters of scalable apps, real-time systems, and airtight
                        security.
                    </p>

                    <p className="text-base leading-relaxed mb-4">
                        Me journey began in the rough waters of vanilla
                        JavaScript, where I battled browser demons and tamed
                        wild CSS seas. Since then, I’ve commanded mighty fleets
                        o’ tech —<span className="font-semibold">Next.js</span>,{" "}
                        <span className="font-semibold">React</span>,{" "}
                        <span className="font-semibold">SvelteKit</span>,{" "}
                        <span className="font-semibold">Node.js</span>,{" "}
                        <span className="font-semibold">NestJS</span>, and even
                        backend beasts like{" "}
                        <span className="font-semibold">Go</span> and{" "}
                        <span className="font-semibold">PostgreSQL</span>. I’ve
                        charted APIs, crafted pixel-perfect interfaces, and
                        built systems as solid as a pirate ship’s hull.
                    </p>

                    <p className="text-base leading-relaxed mb-4">
                        I’ve braved many adventures — from creatin’ analytics
                        dashboards and payment systems, to keepin’ investment
                        platforms safe from scallywag hackers. I lead crews with
                        clean code discipline, wield me CI/CD cutlass with
                        Docker and GitHub Actions, and navigate storms with
                        optimization, accessibility, and design finesse that
                        would make even Blackbeard proud.
                    </p>

                    <p className="text-base leading-relaxed">
                        When I’m not plunderin’ bugs or hoardin’ performance
                        gains, ye’ll find me mentorin’ fellow sailors, explorin’
                        new seas o’ technology, or huntin’ for that perfect user
                        experience that makes every digital voyage
                        unforgettable. ⚔️🏴‍☠️
                    </p>
                </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className={parchmentStyle + " w-full max-w-4xl relative"}
                id="skills"
            >
                <motion.div
                    className="absolute top-4 right-4 text-3xl opacity-20"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 15,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                >
                    🏴‍☠️
                </motion.div>
                <motion.div
                    className="absolute bottom-4 left-4 text-2xl opacity-20"
                    animate={{
                        x: [-10, 10, -10],
                        y: [-5, 5, -5],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                >
                    ⚔️
                </motion.div>

                <div className="text-center mb-8">
                    <motion.h2
                        className="text-4xl font-bold pirate-text mb-4"
                        style={{ fontFamily: "Papyrus, fantasy" }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        🦜 Skills & Arsenal
                    </motion.h2>
                    <WaveUnderline />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        whileHover={{ scale: 1.02, rotateY: 5 }}
                        className="bg-yellow-100 bg-opacity-70 border-3 border-yellow-700 rounded-lg p-6 shadow-lg relative"
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.div
                            className="absolute -top-3 -left-3 text-2xl"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        >
                            ⚔️
                        </motion.div>
                        <div className="grid grid-cols-2 gap-2">
                            {[
                                "HTML",
                                "CSS",
                                "JavaScript",
                                "SvelteKit",
                                "ReactJs",
                                "RemixJs",
                                "NextJs",
                            ].map((skill) => (
                                <div
                                    key={skill}
                                    className="bg-yellow-50 rounded px-3 py-2 text-center text-sm font-medium border border-yellow-600"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02, rotateY: -5 }}
                        className="bg-yellow-100 bg-opacity-70 border-3 border-yellow-700 rounded-lg p-6 shadow-lg relative"
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.div
                            className="absolute -top-3 -left-3 text-2xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 15, -15, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        >
                            🏴‍☠️
                        </motion.div>
                        <div className="grid grid-cols-2 gap-2">
                            {[
                                "NestJs",
                                "PhP",
                                "Laravel",
                                "GoLang",
                                "GoChi",
                                "NodeJs",
                            ].map((skill) => (
                                <div
                                    key={skill}
                                    className="bg-yellow-50 rounded px-3 py-2 text-center text-sm font-medium border border-yellow-600"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02, rotateY: 5 }}
                        className="bg-yellow-100 bg-opacity-70 border-3 border-yellow-700 rounded-lg p-6 shadow-lg relative"
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.div
                            className="absolute -top-3 -left-3 text-2xl"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 20,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                            }}
                        >
                            🗺️
                        </motion.div>
                        <div className="grid grid-cols-2 gap-2">
                            {[
                                "Docker",
                                "Kubernetes",
                                "CI/CD",
                                "Github",
                                "Figma",
                                "DigitalOcean",
                                "AWS",
                                "WebSocket",
                            ].map((skill) => (
                                <div
                                    key={skill}
                                    className="bg-yellow-50 rounded px-3 py-2 text-center text-sm font-medium border border-yellow-600"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02, rotateY: -5 }}
                        className="bg-yellow-100 bg-opacity-70 border-3 border-yellow-700 rounded-lg p-6 shadow-lg relative"
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.div
                            className="absolute -top-3 -left-3 text-2xl"
                            animate={{
                                y: [-5, 5, -5],
                                rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        >
                            💰
                        </motion.div>
                        <div className="grid grid-cols-2 gap-2">
                            {[
                                "SQL",
                                "PSQL",
                                "MySQL",
                                "Redis",
                                "MongoDb",
                                "Prisma",
                                "Mongoose",
                                "SQLC",
                            ].map((skill) => (
                                <div
                                    key={skill}
                                    className="bg-yellow-50 rounded px-3 py-2 text-center text-sm font-medium border border-yellow-600"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Recent Projects Section */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className={parchmentStyle + " w-full max-w-4xl relative"}
                id="recent-projects"
            >
                <motion.div
                    className="fixed top-20 right-8 z-50 text-6xl"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                >
                    🧭
                </motion.div>

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        whileHover={{ scale: 1.03, rotateY: 5 }}
                        className="bg-yellow-100 bg-opacity-70 border-3 border-yellow-700 rounded-lg p-6 shadow-lg relative overflow-hidden"
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.div
                            className="absolute -top-2 -right-2 text-2xl"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 15,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                            }}
                        >
                            ⚓
                        </motion.div>

                        <h3 className="text-xl font-bold text-yellow-900 mb-3">
                            📊 Social Metrica
                        </h3>
                        <p className="text-sm text-yellow-800 mb-3 font-semibold">
                            React.js • TypeScript • Ant Design • NestJS
                        </p>
                        <p className="text-base leading-relaxed mb-4">
                            Captained a{" "}
                            <strong>social analytics galleon</strong> for crews
                            charting <strong>Facebook</strong> &{" "}
                            <strong>TikTok</strong> seas. Form fleets, track
                            pages, compare rivals, and spy on Ad treasures—all
                            in one dashboard.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium">
                                Fleet Management
                            </span>
                            <span className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium">
                                Charts & Insights
                            </span>
                            <span className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium">
                                Ad Treasure Map
                            </span>
                        </div>

                        <a
                            href="https://web.socialmetrica.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-yellow-700 text-yellow-50 font-semibold rounded-lg shadow-md hover:bg-yellow-800 transition-all duration-300"
                        >
                            🦜 View the Ship’s Logs
                        </a>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.03, rotateY: -5 }}
                        className="bg-yellow-100 bg-opacity-70 border-3 border-yellow-700 rounded-lg p-6 shadow-lg relative overflow-hidden"
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.div
                            className="absolute -top-2 -right-2 text-2xl"
                            animate={{
                                scale: [1, 1.3, 1],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        >
                            🦜
                        </motion.div>

                        <h3 className="text-xl font-bold text-yellow-900 mb-3">
                            🗺️ YumYum Myanmar
                        </h3>
                        <p className="text-sm text-yellow-800 mb-3 font-semibold">
                            React • Node.js • MongoDB • Socket.io • Nexxus API
                        </p>
                        <p className="text-base leading-relaxed mb-4">
                            Crafted a QR-code treasure system with Nexxus: users
                            buy YumYum, scan QR codes, and win phone bill
                            rewards. Integrated telecom APIs like Telenor and
                            KPay, ensuring smooth and fair loot distribution.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            <span className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium">
                                QR Coupons
                            </span>
                            <span className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium">
                                Real-time Tracking
                            </span>
                            <span className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium">
                                API Integration
                            </span>
                        </div>

                        <a
                            href="https://yumyum-myanmar.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 px-4 py-2 bg-yellow-700 text-yellow-50 font-semibold rounded-lg shadow-md hover:bg-yellow-800 transition-all duration-300"
                        >
                            🦜 Board the Ship
                        </a>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.03, rotateY: 5 }}
                        className="bg-yellow-100 bg-opacity-70 border-3 border-yellow-700 rounded-lg p-6 shadow-lg relative overflow-hidden"
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.div
                            className="absolute -top-2 -right-2 text-2xl"
                            animate={{
                                y: [-5, 5, -5],
                                rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        >
                            💰
                        </motion.div>
                        <h3 className="text-xl font-bold text-yellow-900 mb-3">
                            ⚔️ JalanX Indonesia
                        </h3>
                        <p className="text-sm text-yellow-800 mb-3 font-semibold">
                            SvelteKit • Laravel • WebSocket • TailwindCSS
                        </p>
                        <p className="text-base leading-relaxed mb-4">
                            Set sail on the wild crypto seas! 🏴‍☠️ Managed
                            real-time price charts, interactive dashboards, and
                            treasure-filled portfolios, guiding modern pirates
                            to make savvy trades without losing their gold.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium">
                                Real-time Price Tracker
                            </span>
                            <span className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium">
                                Interactive Crypto Charts
                            </span>
                            <span className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium">
                                Portfolio Management
                            </span>
                        </div>
                        <a
                            href="https://jalanconnect.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 px-4 py-2 bg-yellow-700 text-yellow-50 font-semibold rounded-lg shadow-md hover:bg-yellow-800 transition-all duration-300"
                        >
                            🦜 Board the Ship
                        </a>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.03, rotateY: -5 }}
                        className="bg-yellow-100 bg-opacity-70 border-3 border-yellow-700 rounded-lg p-6 shadow-lg relative overflow-hidden"
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.div
                            className="absolute -top-2 -right-2 text-2xl"
                            animate={{ rotate: -360 }}
                            transition={{
                                duration: 20,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                            }}
                        >
                            🧭
                        </motion.div>
                        <h3 className="text-xl font-bold text-yellow-900 mb-3">
                            🏴‍☠️ Elunor Tech
                        </h3>
                        <p className="text-sm text-yellow-800 mb-3 font-semibold">
                            ReactJs • Supabase • PostgreSQL • Tailwind
                        </p>
                        <p className="text-base leading-relaxed mb-4">
                            A digital haven for pirates! 🏴‍☠️ Sailors can share
                            adventures, trade tales, and find hidden treasures
                            with real-time chat, image sharing, and lively
                            community groups. All aboard for a smooth voyage
                            through social seas!
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium">
                                Social Adventures
                            </span>
                            <span className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium">
                                Community Groups
                            </span>
                        </div>{" "}
                        <a
                            href="https://yumyum-myanmar.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 px-4 py-2 bg-yellow-700 text-yellow-50 font-semibold rounded-lg shadow-md hover:bg-yellow-800 transition-all duration-300"
                        >
                            🦜 Board the Ship
                        </a>
                    </motion.div>
                </div>
            </motion.section>

            {/* Achievements Section */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className={parchmentStyle + " w-full max-w-4xl relative"}
                id="achievements"
            >
                <motion.div
                    className="absolute top-4 left-4 text-4xl opacity-15"
                    animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                >
                    🏆
                </motion.div>

                <div className="text-center mb-8">
                    <motion.h2
                        className="text-4xl font-bold pirate-text mb-4"
                        style={{ fontFamily: "Papyrus, fantasy" }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        🏴‍☠️ Legendary Achievements
                    </motion.h2>
                    <WaveUnderline />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* GED Achievement */}
                    <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-yellow-100 bg-opacity-70 border-3 border-yellow-700 rounded-lg p-6 text-center shadow-lg relative"
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.div
                            className="text-4xl mb-4"
                            animate={{
                                rotate: [0, 15, -15, 0],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        >
                            🎓
                        </motion.div>
                        <h3 className="text-lg font-bold text-yellow-900 mb-2">
                            GED Conqueror
                        </h3>
                        <p className="text-sm text-yellow-800">
                            Scored <strong>723/800</strong> on the GED exam,
                            mastering the seas of general knowledge.
                        </p>
                    </motion.div>

                    {/* Duolingo Achievement */}
                    <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-yellow-100 bg-opacity-70 border-3 border-yellow-700 rounded-lg p-6 text-center shadow-lg relative"
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.div
                            className="text-4xl mb-4"
                            animate={{
                                y: [-5, 5, -5],
                                rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        >
                            🗣️
                        </motion.div>
                        <h3 className="text-lg font-bold text-yellow-900 mb-2">
                            Duolingo Voyager
                        </h3>
                        <p className="text-sm text-yellow-800">
                            Reached a mighty <strong>115</strong> score, proving
                            linguistic prowess across foreign waters.
                        </p>
                    </motion.div>

                    {/* UoPeople Bachelor */}
                    <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-yellow-100 bg-opacity-70 border-3 border-yellow-700 rounded-lg p-6 text-center shadow-lg relative"
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.div
                            className="text-4xl mb-4"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 10,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                            }}
                        >
                            📜
                        </motion.div>
                        <h3 className="text-lg font-bold text-yellow-900 mb-2">
                            Scholar of the High Seas
                        </h3>
                        <p className="text-sm text-yellow-800">
                            Currently navigating the Bachelor’s journey at{" "}
                            <strong>University of the People</strong>, charting
                            new knowledge horizons.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className={
                    parchmentStyle + " w-full max-w-4xl mx-auto relative"
                }
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
                                        Sabahna Technology Co. Ltd |
                                        2024–Present
                                    </p>
                                    <motion.a
                                        href="https://sabahna.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-yellow-700 bg-opacity-50 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold shadow-lg hover:bg-yellow-800 transition-all duration-300 group border-2 border-yellow-600 self-start"
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow:
                                                "0 4px 12px rgba(124, 74, 3, 0.4)",
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
                                    Contributed as a frontend developer,
                                    collaborating with a cross-functional team
                                    to build a{" "}
                                    <strong>
                                        {" "}
                                        social data analytics platform
                                    </strong>{" "}
                                    that provides insights into Facebook and
                                    TikTok pages. Designed intuitive dashboards
                                    that allow users to compare engagement,
                                    reach, and follower metrics across multiple
                                    social networks.
                                </p>

                                <p className="text-sm md:text-base leading-relaxed mb-3">
                                    Worked extensively with{" "}
                                    <strong>React.js</strong> for the frontend
                                    and <strong>NestJS</strong> for backend
                                    APIs, implementing{" "}
                                    <strong>Redux Toolkit (RTK) Query</strong>{" "}
                                    for efficient caching and invalidation.
                                    Delivered scalable, high-performance
                                    features that improved data load times by
                                    over 40% and reduced redundant API calls.
                                </p>

                                <p className="text-sm md:text-base leading-relaxed mb-3">
                                    Collaborated on architectural decisions,
                                    enforced code quality standards, and
                                    mentored junior developers, ensuring best
                                    practices across the team.
                                </p>

                                <p className="text-sm md:text-base leading-relaxed mb-3">
                                    Also contributed to multiple other projects,
                                    including:
                                </p>

                                <ul className="list-disc list-inside text-sm md:text-base leading-relaxed mb-3 space-y-1">
                                    <li>
                                        <strong>Nexxus Admin Panel</strong> —
                                        built reward system dashboards that
                                        generate campaign QR codes for user
                                        participation and prize tracking.
                                    </li>
                                    <li>
                                        <strong>YamYam Myanmar</strong> —
                                        developed responsive landing pages to
                                        increase brand visibility and improve
                                        lead conversion.
                                    </li>
                                    <li>
                                        <strong>Nexxus Application</strong> —
                                        supported frontend development, ensuring
                                        a smooth user experience across mobile
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
                                            boxShadow:
                                                "0 4px 12px rgba(124, 74, 3, 0.4)",
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
                                    As a{" "}
                                    <strong>Senior Full-Stack Developer</strong>
                                    , I captained the engineering deck,
                                    mentoring junior shipmates while charting
                                    courses across multiple co-operator projects
                                    throughout Asia, including alliances with{" "}
                                    <a
                                        href="https://ids-group.ltd/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-yellow-700 hover:underline"
                                    >
                                        IDS Group
                                    </a>
                                    . My voyages spanned from crafting intuitive
                                    UIs to securing servers against storms of
                                    cyber attackers.
                                </p>

                                <p className="text-sm md:text-base leading-relaxed mb-3">
                                    Armed with <strong>GoLang</strong> and{" "}
                                    <strong>Go-chi</strong>, I built resilient
                                    backends, while <strong>SQLC</strong> was my
                                    trusted compass for type-safe database
                                    queries. For frontend expeditions, I
                                    harnessed the power of{" "}
                                    <strong>React</strong>,{" "}
                                    <strong>SvelteKit</strong>, and{" "}
                                    <strong>RemixJS</strong>, delivering
                                    experiences smoother than a calm sea. When
                                    the tide called for rapid sails,{" "}
                                    <strong>Laravel</strong> joined the fleet to
                                    bring projects to harbor swiftly.
                                </p>

                                <p className="text-sm md:text-base leading-relaxed mb-3">
                                    Our databases—both <strong>SQL</strong> and{" "}
                                    <strong>PostgreSQL</strong>—were fortified
                                    like treasure vaults, optimized for speed
                                    and scalability. I enforced rigorous server
                                    maintenance, hardened security against
                                    intruders, and handled domain management
                                    like a vigilant quartermaster guarding the
                                    ship's map. Alongside, I built RESTful APIs,
                                    orchestrated data flows, and kept uptime at
                                    a steady 99.9%, ensuring the fleet never
                                    drifted off course.
                                </p>

                                <p className="text-sm md:text-base leading-relaxed mb-3">
                                    Whether it was launching 20+ e-commerce
                                    vessels, crafting dashboards for analytics,
                                    or steering high-traffic systems, I sailed
                                    with precision, always keeping the crew
                                    aligned and the projects on the horizon.
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
                                            boxShadow:
                                                "0 4px 12px rgba(124, 74, 3, 0.4)",
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
                                    Built responsive websites for small
                                    businesses using ReactJs, ShadCn,
                                    TailwindCss and NestJs, while mastering
                                    version control and agile development
                                    practices.
                                </p>

                                <p className="text-sm md:text-base leading-relaxed mb-3">
                                    Collaborated with designers to transform
                                    mockups into pixel-perfect, interactive web
                                    experiences. Gained expertise in
                                    cross-browser compatibility and mobile-first
                                    development approaches.
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
                </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className={parchmentStyle + " w-full max-w-4xl relative"}
                id="contact"
            >
                <motion.div
                    className="absolute top-4 right-4 text-3xl opacity-20"
                    animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                >
                    📧
                </motion.div>

                <div className="text-center mb-8">
                    <motion.h2
                        className="text-4xl font-bold pirate-text mb-4 flex justify-center items-center gap-3"
                        style={{ fontFamily: "Papyrus, fantasy" }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Bottle width={40} height={40} />
                        Send a Message in a Bottle
                    </motion.h2>
                    <WaveUnderline />
                </div>

                <div className="text-center">
                    <p className="text-lg leading-relaxed mb-6">
                        Ready to embark on a new digital adventure together?
                        Whether you need a skilled navigator for your next
                        project or want to discuss the latest treasures in web
                        development, I'm always ready to chart new courses!
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <motion.a
                            href="mailto:dev.jinn221@gmail.com"
                            target="_blank"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-yellow-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-yellow-800 transition-colors flex items-center gap-2"
                        >
                            📧 dev.jinn221@gmail.com
                        </motion.a>

                        <motion.a
                            href="https://github.com/jinn091"
                            target="_blank"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-yellow-100 text-yellow-900 border-2 border-yellow-700 px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-yellow-200 transition-colors flex items-center gap-2"
                        >
                            🐙 GitHub Portfolio
                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/wan-na-aung-3a5b692b6/"
                            target="_blank"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-yellow-100 text-yellow-900 border-2 border-yellow-700 px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-yellow-200 transition-colors flex items-center gap-2"
                        >
                            ⚓ LinkedIn
                        </motion.a>
                    </div>
                </div>
            </motion.section>

            <motion.div
                className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-3xl opacity-30"
                animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 5, -5, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            >
                🌊
            </motion.div>
        </main>
    );
}
