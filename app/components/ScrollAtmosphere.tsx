"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollAtmosphere() {
    const reduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.35 });
    const chartY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -180]);
    const driftY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 120]);
    const rotate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 42]);

    return (
        <>
            <div className="pointer-events-none fixed left-4 top-1/2 z-40 hidden h-56 w-px -translate-y-1/2 overflow-hidden rounded-full bg-white/10 md:block">
                <motion.span
                    className="block w-full origin-top bg-[linear-gradient(180deg,var(--cyan),var(--gold))]"
                    style={{ scaleY: progress, height: "100%" }}
                />
            </div>
            <motion.div
                aria-hidden="true"
                className="pointer-events-none fixed inset-x-[-8rem] top-20 z-0 h-[34rem] opacity-45"
                style={{ y: chartY }}
            >
                <div className="absolute inset-0 bg-[linear-gradient(112deg,transparent_0_38%,rgba(97,244,255,0.12)_38.15%_38.35%,transparent_38.6%),linear-gradient(248deg,transparent_0_52%,rgba(255,211,110,0.08)_52.15%_52.35%,transparent_52.6%)] bg-[length:26rem_26rem]" />
            </motion.div>
            <motion.div
                aria-hidden="true"
                className="pointer-events-none fixed right-5 top-28 z-0 hidden h-28 w-28 rounded-full border border-[color:var(--cyan)]/25 md:block"
                style={{ rotate, y: driftY }}
            >
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[color:var(--cyan)]/20" />
                <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[color:var(--cyan)]/20" />
                <div className="absolute inset-7 rounded-full border border-[color:var(--gold)]/25" />
                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--coral)]" />
            </motion.div>
        </>
    );
}
