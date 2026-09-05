"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaAnchor, FaCodeBranch, FaCompass } from "react-icons/fa6";

const routeDots = [
    { left: "18%", top: "66%", delay: 0 },
    { left: "34%", top: "48%", delay: 0.18 },
    { left: "52%", top: "56%", delay: 0.36 },
    { left: "68%", top: "34%", delay: 0.54 },
    { left: "83%", top: "45%", delay: 0.72 },
];

export default function KineticHeroStage() {
    const stage = useRef<HTMLDivElement>(null);
    const reduceMotion = useReducedMotion();
    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);
    const { scrollYProgress } = useScroll({
        target: stage,
        offset: ["start end", "end start"],
    });

    const smoothX = useSpring(pointerX, { stiffness: 90, damping: 24, mass: 0.4 });
    const smoothY = useSpring(pointerY, { stiffness: 90, damping: 24, mass: 0.4 });
    const chartY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-32, 46]);
    const chartX = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [18, -26]);
    const glowY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-18, 32]);
    const rotate = useTransform(smoothX, [-1, 1], [-5, 5]);
    const ringX = useTransform(smoothX, [-1, 1], [-24, 24]);
    const ringY = useTransform(smoothY, [-1, 1], [-16, 16]);
    const badgeX = useTransform(smoothX, [-1, 1], [18, -18]);
    const badgeY = useTransform(smoothY, [-1, 1], [14, -14]);
    const spotlight = useMotionTemplate`radial-gradient(circle at ${useTransform(smoothX, [-1, 1], [28, 72])}% ${useTransform(smoothY, [-1, 1], [24, 74])}%, rgba(97,244,255,0.28), transparent 34rem)`;

    return (
        <motion.div
            ref={stage}
            className="kinetic-stage relative h-[25rem] w-full overflow-hidden rounded-[30px] border border-white/10 md:h-[30rem] lg:h-[34rem]"
            role="img"
            aria-label="Animated parallax sea chart with route lines and privateer interface elements"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            onPointerMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
                pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
            }}
            onPointerLeave={() => {
                pointerX.set(0);
                pointerY.set(0);
            }}
        >
            <motion.div className="absolute inset-0" style={{ background: spotlight }} />
            <motion.div
                className="absolute inset-x-[-18%] top-3 h-[74%] rounded-[50%] border border-[color:var(--cyan)]/12"
                style={{ y: glowY, rotate }}
            />
            <motion.div
                className="absolute left-[48%] top-[11%] h-[17rem] w-[17rem] -translate-x-1/2 rounded-full border border-[color:var(--gold)]/16 md:h-[23rem] md:w-[23rem]"
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 80, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{ x: ringX, y: ringY }}
            >
                <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[color:var(--cyan)]/15" />
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[color:var(--cyan)]/15" />
                <span className="absolute inset-[24%] rounded-full border border-white/10" />
                <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--coral)] shadow-[0_0_28px_rgba(255,107,122,0.8)]" />
            </motion.div>

            <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[color:var(--cyan)] backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--coral)] shadow-[0_0_18px_rgba(255,107,122,0.8)]" />
                Privateer map
            </div>

            <motion.svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 900 680"
                fill="none"
                aria-hidden="true"
                style={{ x: chartX, y: chartY }}
            >
                <defs>
                    <linearGradient id="route" x1="96" x2="820" y1="452" y2="218" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#61f4ff" stopOpacity="0.08" />
                        <stop offset="0.42" stopColor="#61f4ff" stopOpacity="0.9" />
                        <stop offset="1" stopColor="#ffd36e" stopOpacity="0.72" />
                    </linearGradient>
                    <linearGradient id="blade" x1="356" x2="594" y1="176" y2="494" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#f4f7ff" stopOpacity="0.82" />
                        <stop offset="0.48" stopColor="#61f4ff" stopOpacity="0.24" />
                        <stop offset="1" stopColor="#ff6b7a" stopOpacity="0.52" />
                    </linearGradient>
                </defs>
                <path className="route-line" d="M70 498 C208 338 326 548 456 410 C568 292 658 250 832 210" stroke="url(#route)" strokeWidth="3" strokeLinecap="round" />
                <path d="M84 554 C250 486 384 594 592 492 C694 442 748 416 856 432" stroke="#f4f7ff" strokeOpacity="0.11" strokeWidth="2" />
                <path d="M126 302 L296 224 L482 266 L720 142" stroke="#61f4ff" strokeOpacity="0.16" strokeWidth="1.5" strokeDasharray="9 16" />
                <path d="M152 126 L314 514 L542 98 L804 512" stroke="#8d7bff" strokeOpacity="0.12" strokeWidth="2" />
                <path d="M450 142 L528 346 L444 532 L372 330 Z" fill="url(#blade)" opacity="0.85" />
                <path d="M450 142 L444 532" stroke="#f4f7ff" strokeOpacity="0.46" strokeWidth="2" />
                <path d="M372 330 L528 346" stroke="#f4f7ff" strokeOpacity="0.22" strokeWidth="2" />
                <circle cx="450" cy="338" r="12" fill="#05070d" stroke="#61f4ff" strokeOpacity="0.55" />
            </motion.svg>

            {routeDots.map((dot) => (
                <motion.span
                    key={`${dot.left}-${dot.top}`}
                    className="absolute h-2.5 w-2.5 rounded-full bg-[color:var(--cyan)] shadow-[0_0_22px_rgba(97,244,255,0.9)]"
                    style={{ left: dot.left, top: dot.top }}
                    animate={reduceMotion ? undefined : { scale: [1, 1.8, 1], opacity: [0.48, 1, 0.48] }}
                    transition={{ duration: 2.6, repeat: Number.POSITIVE_INFINITY, delay: dot.delay, ease: "easeInOut" }}
                />
            ))}

            <motion.div
                className="absolute left-[9%] top-[31%] grid h-24 w-24 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[color:var(--cyan)] backdrop-blur-xl md:h-32 md:w-32"
                style={{ x: ringX, y: ringY }}
            >
                <FaCompass className="h-10 w-10 md:h-14 md:w-14" aria-hidden="true" />
            </motion.div>

            <motion.div
                className="absolute right-[8%] top-[18%] hidden w-48 space-y-3 text-right md:block"
                style={{ x: badgeX }}
                aria-hidden="true"
            >
                {["13.7563 N", "100.5018 E", "BUILD 361"].map((label) => (
                    <div key={label} className="flex items-center justify-end gap-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[color:var(--mist)]/60">
                        <span className="h-px w-12 bg-[color:var(--gold)]/35" />
                        {label}
                    </div>
                ))}
            </motion.div>

            <motion.div
                className="absolute bottom-8 left-8 rounded-[28px] border border-white/10 bg-black/20 p-5 backdrop-blur-xl"
                style={{ x: badgeX, y: badgeY }}
            >
                <p className="font-display text-5xl font-semibold leading-none text-[color:var(--pearl)]">Jinn</p>
                <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[color:var(--cyan)]">Captain mark</p>
            </motion.div>

            <div className="absolute bottom-5 right-5 grid grid-cols-3 gap-2">
                {[FaCompass, FaCodeBranch, FaAnchor].map((Icon, index) => (
                    <motion.span
                        key={index}
                        className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-black/20 text-[color:var(--pearl)] backdrop-blur-xl"
                        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                        transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, delay: index * 0.24, ease: "easeInOut" }}
                    >
                        <Icon aria-hidden="true" />
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
}
