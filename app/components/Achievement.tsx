import React from "react";
import { motion } from "framer-motion";
import WaveUnderline from "./WaveUnderline";
type Props = { parchmentStyle: string };

export default function Achievement({ parchmentStyle }: Props) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
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
                        <strong>University of the People</strong>, charting new
                        knowledge horizons.
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
}
