import React, { useState } from "react";
import { motion } from "framer-motion";
import WaveUnderline from "./WaveUnderline";
import { LetterDialog, LetterDialogTrigger } from "@/components/Dialog";

type Props = { parchmentStyle: string };

export default function Intro({ parchmentStyle }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
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
                    sailin’ the digital seas for years, chartin’ courses through
                    stormy deadlines and discoverin’ hidden treasures in modern
                    web development. From the coast o’ Thailand to far-off
                    foreign ports, I’ve served with global crews, leadin’
                    expeditions into the uncharted waters of scalable apps,
                    real-time systems, and airtight security.
                </p>

                <p className="text-base leading-relaxed mb-4">
                    Me journey began in the rough waters of vanilla JavaScript,
                    where I battled browser demons and tamed wild CSS seas.
                    Since then, I’ve commanded mighty fleets o’ tech —
                    <span className="font-semibold">Next.js</span>,{" "}
                    <span className="font-semibold">React</span>,{" "}
                    <span className="font-semibold">SvelteKit</span>,{" "}
                    <span className="font-semibold">Node.js</span>,{" "}
                    <span className="font-semibold">NestJS</span>, and even
                    backend beasts like{" "}
                    <span className="font-semibold">Go</span> and{" "}
                    <span className="font-semibold">PostgreSQL</span>. I’ve
                    charted APIs, crafted pixel-perfect interfaces, and built
                    systems as solid as a pirate ship’s hull.
                </p>

                <p className="text-base leading-relaxed mb-4">
                    I’ve braved many adventures — from creatin’ analytics
                    dashboards and payment systems, to keepin’ investment
                    platforms safe from scallywag hackers. I lead crews with
                    clean code discipline, wield me CI/CD cutlass with Docker
                    and GitHub Actions, and navigate storms with optimization,
                    accessibility, and design finesse that would make even
                    Blackbeard proud.
                </p>

                <p className="text-base leading-relaxed">
                    When I’m not plunderin’ bugs or hoardin’ performance gains,
                    ye’ll find me mentorin’ fellow sailors, explorin’ new seas
                    o’ technology, or huntin’ for that perfect user experience
                    that makes every digital voyage unforgettable. ⚔️🏴‍☠️
                </p>
            </div>
        </motion.section>
    );
}
