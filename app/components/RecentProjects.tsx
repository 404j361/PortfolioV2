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
                    className="bg-yellow-100 bg-opacity-70 border-3 border-yellow-700 rounded-lg p-6 shadow-lg relative overflow-hidden flex flex-col justify-between min-h-[420px]"
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

                    <div>
                        <h3 className="text-xl font-bold text-yellow-900 mb-3">
                            📊 Social Metrica
                        </h3>
                        <p className="text-sm text-yellow-800 mb-3 font-semibold">
                            React.js • TypeScript • Ant Design • NestJS
                        </p>
                        <p className="text-base leading-relaxed mb-4">
                            Chart yer course with{" "}
                            <strong>Social Metrica</strong>, the mighty
                            analytics galleon that sails beyond the horizon of
                            ordinary tools like Social Insider. While other
                            ships only dock at <strong>Facebook</strong> and{" "}
                            <strong>Instagram</strong>, our crew braves the
                            stormy seas of <strong>TikTok</strong>, bringing the
                            fastest-growing ocean of social treasure right to
                            yer map. ⚔️
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
                    </div>

                    {/* Buttons pinned at bottom */}
                    <div className="grid grid-cols-2 gap-3 mt-auto">
                        <a
                            href="https://web.socialmetrica.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center text-center items-center gap-1 px-3 py-1.5 bg-yellow-700 text-yellow-50 text-sm font-semibold rounded-md shadow-md hover:bg-yellow-800 hover:scale-105 transform transition-all duration-300"
                        >
                            🦜 Set Sail!
                        </a>

                        {/* <LetterDialogTrigger
                            title="Captain's Log: Social Metrica"
                            dialog="Social Metrica"
                        >
                            <button className="flex items-center justify-center w-full gap-1 px-3 py-1.5 bg-yellow-100 bg-opacity-80 text-yellow-900 text-sm font-semibold rounded-md border-2 border-yellow-700 shadow-md hover:bg-yellow-200 hover:scale-105 transform transition-all duration-300">
                                🗺 Map
                            </button>
                        </LetterDialogTrigger> */}
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
                        📜
                    </motion.div>
                    <h3 className="text-xl font-bold text-yellow-900 mb-3">
                        ⚔️ Alchemist Academy
                    </h3>
                    <p className="text-sm text-yellow-800 mb-3 font-semibold">
                        ReactJs • NestJs • WebSocket • TailwindCSS • AntDesign
                    </p>
                    <p className="text-base leading-relaxed mb-4">
                        Set sail on the high seas of knowledge! 🏴‍☠️ Alchemist
                        Academy is an AI-powered learning vessel where students
                        sharpen their skills for the <strong>PTE exam</strong>.
                        From <strong>Reading</strong> to{" "}
                        <strong>Writing</strong> and <strong>Speaking</strong>,
                        adventurers practice with real-time feedback, guided by
                        clever algorithms instead of old sea maps.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium">
                            Reading Quests
                        </span>
                        <span className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium">
                            Speaking Adventures
                        </span>
                        <span className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium">
                            AI Navigator Feedback
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        {/* Live Demo */}
                        <a
                            href="https://pte.alchemistacademy.com.au/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center text-center items-center gap-1 px-3 py-1.5 bg-yellow-700 text-yellow-50 text-sm font-semibold rounded-md shadow-md hover:bg-yellow-800 hover:scale-105 transform transition-all duration-300"
                        >
                            🦜 Set Sail!
                        </a>

                        {/* Project Details */}
                        {/* <LetterDialogTrigger
                            title="Captain's Log: Alchemist Academy"
                            dialog="Alchemist Academy"
                        >
                            <button className="flex items-center justify-center w-full gap-1 px-3 py-1.5 bg-yellow-100 bg-opacity-80 text-yellow-900 text-sm font-semibold rounded-md border-2 border-yellow-700 shadow-md hover:bg-yellow-200 hover:scale-105 transform transition-all duration-300">
                                🗺 Map
                            </button>
                        </LetterDialogTrigger> */}
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
                            🦜 Set Sail!
                        </a>

                        {/* Project Details */}
                        {/* <LetterDialogTrigger
                            title="Captain's Log: YumYum Myanmar"
                            dialog="YumYum Myanmar Project Details"
                        >
                            <button className="flex items-center justify-center w-full gap-1 px-3 py-1.5 bg-yellow-100 bg-opacity-80 text-yellow-900 text-sm font-semibold rounded-md border-2 border-yellow-700 shadow-md hover:bg-yellow-200 hover:scale-105 transform transition-all duration-300">
                                🗺 Chart the Treasure
                            </button>
                        </LetterDialogTrigger> */}
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.03, rotateY: -5 }}
                    className="bg-yellow-100 bg-opacity-70 border-3 border-yellow-700 rounded-lg p-6 shadow-lg relative overflow-hidden"
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {/* Rotating Icon */}
                    <motion.div
                        className="absolute -top-2 -right-2 text-2xl"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 20,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    >
                        🎁
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-yellow-900 mb-3">
                        🏴‍☠️ Nexxus Admin Dashboard
                    </h3>

                    {/* Tech stack */}
                    <p className="text-sm text-yellow-800 mb-3 font-semibold">
                        React.js • NestJS • Prisma • TailwindCSS • MySQL
                    </p>

                    {/* Short Description */}
                    <p className="text-base leading-relaxed mb-4">
                        Hoist the sails for{" "}
                        <strong>Nexxus Admin Dashboard</strong>! ⚔️ This mighty
                        deck lets captains generate{" "}
                        <strong>QR-coded rewards</strong>
                        for the products in Myanmar — tracking which cities
                        receive YumYum Myanmar Noodles, ChoCho, and more, while
                        ensuring every sailor enjoys their treasure-filled
                        package.
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium">
                            QR Rewards
                        </span>
                        <span className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium">
                            Campaign Management
                        </span>
                        <span className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium">
                            City Distribution
                        </span>
                        <span className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium">
                            Product Tracking
                        </span>
                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        {/* Live Demo - Restricted */}
                        <button className="flex justify-center items-center gap-1 px-3 py-1.5 bg-yellow-700 text-yellow-50 text-sm font-semibold rounded-md shadow-md hover:bg-yellow-800 hover:scale-105 transform transition-all duration-300 cursor-not-allowed opacity-70">
                            🦜 Authorized Crew Only
                        </button>

                        {/* Project Details */}
                        {/* <LetterDialogTrigger
                            title="Captain's Log: Nexxus Admin Dashboard"
                            dialog="Nexxus Admin Panel"
                        >
                            <button className="flex items-center justify-center w-full gap-1 px-3 py-1.5 bg-yellow-100 bg-opacity-80 text-yellow-900 text-sm font-semibold rounded-md border-2 border-yellow-700 shadow-md hover:bg-yellow-200 hover:scale-105 transform transition-all duration-300">
                                🗺 Check the Charts
                            </button>
                        </LetterDialogTrigger> */}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
