import React from "react";
import { motion } from "framer-motion";
import WaveUnderline from "./WaveUnderline";

type Props = { parchmentStyle: string };

export default function Skills({ parchmentStyle }: Props) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
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
    );
}
