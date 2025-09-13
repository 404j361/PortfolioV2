"use client";
import { motion } from "framer-motion";
import { Achievement, Intro, Skills, WaveUnderline } from "./components";
import RecentProjects from "./components/RecentProjects";
import WorkHistory from "./components/WorkHistory";
import ContactUs from "./components/ContactUs";

const parchmentStyle =
    "bg-[url('https://www.transparenttextures.com/patterns/old-mathematics.png')] bg-[#f5e9c6] border-4 border-yellow-700 rounded-xl shadow-xl p-8 mb-10";

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
            <Intro parchmentStyle={parchmentStyle} />

            {/* Skills Section */}
            <Skills parchmentStyle={parchmentStyle} />

            {/* Recent Projects Section */}
            <RecentProjects parchmentStyle={parchmentStyle} />

            {/* Achievements Section */}
            <Achievement parchmentStyle={parchmentStyle} />

            {/* Work History Section */}
            <WorkHistory parchmentStyle={parchmentStyle} />

            {/* Contact Section */}
            <ContactUs parchmentStyle={parchmentStyle} />

            <motion.div
                className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-3xl"
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
                <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center">
                    <motion.div
                        className="w-1 h-3 bg-yellow-500 rounded-full mt-2"
                        animate={{
                            y: [0, 12, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </motion.div>
        </main>
    );
}
