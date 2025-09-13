import React from "react";
import { motion } from "framer-motion";
import WaveUnderline from "./WaveUnderline";
import { LetterDialogTrigger } from "@/components/Dialog";

type Props = { parchmentStyle: string };

export default function RecentProjects({ parchmentStyle }: Props) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
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
                        Captained a <strong>social analytics galleon</strong>{" "}
                        for crews charting <strong>Facebook</strong> &{" "}
                        <strong>TikTok</strong> seas. Form fleets, track pages,
                        compare rivals, and spy on Ad treasures—all in one
                        dashboard. Adventure awaits for every hungry sailor!
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
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        {/* Live Demo */}
                        <a
                            href="https://web.socialmetrica.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center text-center items-center gap-1 px-3 py-1.5 bg-yellow-700 text-yellow-50 text-sm font-semibold rounded-md shadow-md hover:bg-yellow-800 hover:scale-105 transform transition-all duration-300"
                        >
                            🦜 Set Sail!
                        </a>

                        {/* Project Details */}
                        <LetterDialogTrigger
                            title="Captain's Log: Social Metrica"
                            dialog="Social Metrica"
                        >
                            <button className="flex items-center justify-center w-full gap-1 px-3 py-1.5 bg-yellow-100 bg-opacity-80 text-yellow-900 text-sm font-semibold rounded-md border-2 border-yellow-700 shadow-md hover:bg-yellow-200 hover:scale-105 transform transition-all duration-300">
                                🗺 Map
                            </button>
                        </LetterDialogTrigger>
                    </div>
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
                        Set sail on the wild crypto seas! 🏴‍☠️ Managed real-time
                        price charts, interactive dashboards, and
                        treasure-filled portfolios, guiding modern pirates to
                        make savvy trades without losing their gold.
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
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        {/* Live Demo */}
                        <a
                            href="https://jalanconnect.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center text-center items-center gap-1 px-3 py-1.5 bg-yellow-700 text-yellow-50 text-sm font-semibold rounded-md shadow-md hover:bg-yellow-800 hover:scale-105 transform transition-all duration-300"
                        >
                            🦜 Set Sail!
                        </a>

                        {/* Project Details */}
                        <LetterDialogTrigger
                            title="Captain's Log: Social Metrica"
                            dialog="Social Metrica"
                        >
                            <button className="flex items-center justify-center w-full gap-1 px-3 py-1.5 bg-yellow-100 bg-opacity-80 text-yellow-900 text-sm font-semibold rounded-md border-2 border-yellow-700 shadow-md hover:bg-yellow-200 hover:scale-105 transform transition-all duration-300">
                                🗺 Map
                            </button>
                        </LetterDialogTrigger>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.03, rotateY: -5 }}
                    className="bg-yellow-100 bg-opacity-70 border-3 border-yellow-700 rounded-lg p-6 shadow-lg relative overflow-hidden"
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {/* Flying Parrot */}
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

                    {/* Title */}
                    <h3 className="text-xl font-bold text-yellow-900 mb-3">
                        🗺️ YumYum Myanmar
                    </h3>

                    {/* Tech stack */}
                    <p className="text-sm text-yellow-800 mb-3 font-semibold">
                        React • Node.js • MongoDB • Socket.io • Nexxus API
                    </p>

                    {/* Description */}
                    <p className="text-base leading-relaxed mb-4">
                        Crafted a **QR-code treasure system** with Nexxus: users
                        buy YumYum, scan QR codes, and win phone bill rewards.
                        Integrated telecom APIs like Telenor and KPay, ensuring
                        smooth and fair loot distribution. The crew can track
                        each treasure in real time and claim their bounty
                        safely. ⚓
                    </p>

                    {/* Tags */}
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

                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        {/* Live Demo */}
                        <a
                            href="https://appget.yumyummyanmar.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center text-center items-center gap-1 px-3 py-1.5 bg-yellow-700 text-yellow-50 text-sm font-semibold rounded-md shadow-md hover:bg-yellow-800 hover:scale-105 transform transition-all duration-300"
                        >
                            🦜 Hoist the Sails!
                        </a>

                        {/* Project Details */}
                        <LetterDialogTrigger
                            title="Captain's Log: YumYum Myanmar"
                            dialog="YumYum Myanmar Project Details"
                        >
                            <button className="flex items-center justify-center w-full gap-1 px-3 py-1.5 bg-yellow-100 bg-opacity-80 text-yellow-900 text-sm font-semibold rounded-md border-2 border-yellow-700 shadow-md hover:bg-yellow-200 hover:scale-105 transform transition-all duration-300">
                                🗺 Chart the Treasure
                            </button>
                        </LetterDialogTrigger>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.03, rotateY: -5 }}
                    className="bg-yellow-100 bg-opacity-70 border-3 border-yellow-700 rounded-lg p-6 shadow-lg relative overflow-hidden"
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {/* Rotating Compass */}
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

                    {/* Title */}
                    <h3 className="text-xl font-bold text-yellow-900 mb-3">
                        🏴‍☠️ JalanX Admin Deck
                    </h3>

                    {/* Tech stack */}
                    <p className="text-sm text-yellow-800 mb-3 font-semibold">
                        SvelteKit • Laravel • Go • UnoCss • MySQL
                    </p>

                    {/* Description */}
                    <p className="text-base leading-relaxed mb-4">
                        Ahoy! The captain (admin) charts the course for crew
                        activities—managing transactions, roles, permissions,
                        and banking. Admins can download treasure maps (CSV
                        reports), spy on crew movements, and keep the fleet in
                        line—all in one place. Alas, the live admin deck cannot
                        be shown to outsiders. ⚓
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium">
                            Social Adventures
                        </span>
                        <span className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium">
                            Community Groups
                        </span>
                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        {/* Live Demo - Restricted */}
                        <button className="flex justify-center items-center gap-1 px-3 py-1.5 bg-yellow-700 text-yellow-50 text-sm font-semibold rounded-md shadow-md hover:bg-yellow-800 hover:scale-105 transform transition-all duration-300 cursor-not-allowed opacity-70">
                            🦜 Authorized Crew Only
                        </button>

                        {/* Project Details */}
                        <LetterDialogTrigger
                            title="Captain's Log: JalanX Admin Deck"
                            dialog="JalanX Admin Panel"
                        >
                            <button className="flex items-center justify-center w-full gap-1 px-3 py-1.5 bg-yellow-100 bg-opacity-80 text-yellow-900 text-sm font-semibold rounded-md border-2 border-yellow-700 shadow-md hover:bg-yellow-200 hover:scale-105 transform transition-all duration-300">
                                🗺 Check the Charts
                            </button>
                        </LetterDialogTrigger>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
