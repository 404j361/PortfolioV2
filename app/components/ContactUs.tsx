import React from "react";
import { motion } from "framer-motion";
import { Bottle } from "@/components/icons";
import WaveUnderline from "./WaveUnderline";
type Props = { parchmentStyle: string };

export default function ContactUs({ parchmentStyle }: Props) {
    return (
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
                    Ready to embark on a new digital adventure together? Whether
                    you need a skilled navigator for your next project or want
                    to discuss the latest treasures in web development, I'm
                    always ready to chart new courses!
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
    );
}
