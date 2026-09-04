"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaAnchor, FaArrowRight, FaCompass, FaGithub, FaLinkedinIn } from "react-icons/fa";
import KineticHeroStage from "./KineticHeroStage";

type Props = { parchmentStyle: string };

const metrics = [
    { value: 3, suffix: "+", label: "Years shipping" },
    { value: 20, suffix: "+", label: "Products touched" },
    { value: 99.9, suffix: "%", label: "Uptime mindset", decimals: 1 },
];

function CountUpMetric({
    value,
    suffix,
    label,
    decimals = 0,
}: {
    value: number;
    suffix: string;
    label: string;
    decimals?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.45 });
    const reduceMotion = useReducedMotion();
    const [displayValue, setDisplayValue] = useState(reduceMotion ? value : 0);

    useEffect(() => {
        if (!isInView) return;

        if (reduceMotion) {
            setDisplayValue(value);
            return;
        }

        let frame = 0;
        const duration = 1300;
        const start = performance.now();
        const easeOutQuart = (progress: number) => 1 - Math.pow(1 - progress, 4);

        const tick = (time: number) => {
            const progress = Math.min((time - start) / duration, 1);
            setDisplayValue(value * easeOutQuart(progress));

            if (progress < 1) {
                frame = requestAnimationFrame(tick);
            }
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [decimals, isInView, reduceMotion, value]);

    const formattedValue = displayValue.toFixed(decimals);

    return (
        <div ref={ref} className="border-white/10 py-4 sm:border-r sm:px-5 sm:last:border-r-0">
            <p
                className="font-display text-3xl font-semibold text-[color:var(--pearl)]"
                aria-label={`${value.toFixed(decimals)}${suffix} ${label}`}
            >
                {formattedValue}
                {suffix}
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]">
                {label}
            </p>
        </div>
    );
}

export default function Intro({ parchmentStyle }: Props) {
    return (
        <section className={`${parchmentStyle} min-h-[calc(100dvh-6rem)] border-t-0 pt-4 md:pt-10`}>
            <div className="grid items-center gap-8 lg:grid-cols-[0.86fr_1.14fr]">
                <motion.div
                    initial={false}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative order-2 py-6 lg:order-1 lg:py-10"
                >
                    <div className="absolute -left-20 top-0 h-44 w-44 rounded-full bg-[color:var(--cyan)]/12 blur-3xl" />
                    <div className="eyebrow flex items-center gap-3">
                        <span className="h-px w-9 bg-[color:var(--cyan)]" />
                        Digital privateer
                    </div>

                    <h1 className="gradient-text font-display mt-5 max-w-4xl pt-3 pb-2 text-7xl font-semibold leading-[0.92] tracking-[-0.03em] md:text-8xl xl:text-[9.5rem]">
                        Captain Jinn
                    </h1>

                    <p className="mt-8 max-w-xl border-l border-[color:var(--cyan)]/35 pl-5 text-lg leading-8 text-[color:var(--mist)] md:text-xl">
                        I design and build modern web products that feel precise, fast, and
                        memorable. Clean interfaces, resilient systems, and just enough pirate
                        soul to make the work unmistakable.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#recent-projects"
                            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[color:var(--pearl)] px-5 py-3 text-sm font-bold text-[color:var(--obsidian)] transition duration-200 hover:scale-[1.02] hover:bg-white active:scale-[0.98]"
                        >
                            Explore work
                            <FaArrowRight aria-hidden="true" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/18 px-5 py-3 text-sm font-bold text-[color:var(--pearl)] transition duration-200 hover:scale-[1.02] hover:border-[color:var(--cyan)] hover:text-[color:var(--cyan)] active:scale-[0.98]"
                        >
                            <FaAnchor aria-hidden="true" />
                            Start a build
                        </a>
                    </div>

                    <div className="mt-10 grid gap-0 border-y border-white/10 sm:grid-cols-3">
                        {metrics.map((metric) => (
                            <CountUpMetric
                                key={metric.label}
                                value={metric.value}
                                suffix={metric.suffix}
                                label={metric.label}
                                decimals={metric.decimals}
                            />
                        ))}
                    </div>
                </motion.div>

                <div className="relative order-1 flex flex-col lg:order-2">
                    <KineticHeroStage />
                    <motion.aside
                        initial={false}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative z-10 mt-6 ml-auto w-full max-w-2xl overflow-hidden rounded-[24px] border border-white/10 bg-black/20 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-2xl md:mt-7 md:p-4 lg:mt-8"
                    >
                        <div className="grid grid-cols-[5rem_1fr] gap-3 md:grid-cols-[7rem_1fr_auto] md:items-center md:gap-4">
                            <div className="relative aspect-square overflow-hidden rounded-[18px] border border-white/15 bg-white/10">
                                <img
                                    src="/images/avatar.webp"
                                    alt="Captain Jinn"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="flex min-w-0 flex-col justify-between gap-3 p-1">
                                <div>
                                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--gold)] md:text-sm md:tracking-[0.18em]">
                                        Current bearing
                                    </p>
                                    <p className="mt-1 text-sm font-semibold leading-5 text-[color:var(--pearl)] md:mt-2 md:text-base md:leading-6">
                                        Building modern websites, mobile-ready apps, and secure
                                        systems with a cybersecurity-first mindset.
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-2 flex gap-3 md:col-span-1">
                                <a
                                    href="https://github.com/404j361"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-[color:var(--pearl)] transition hover:border-[color:var(--cyan)] hover:text-[color:var(--cyan)] md:h-11 md:w-11"
                                    aria-label="GitHub"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/wan-na-aung-3a5b692b6/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-[color:var(--pearl)] transition hover:border-[color:var(--cyan)] hover:text-[color:var(--cyan)] md:h-11 md:w-11"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedinIn />
                                </a>
                                <span className="ml-auto grid h-10 w-10 place-items-center rounded-full bg-[color:var(--cyan)]/12 text-[color:var(--cyan)] md:h-11 md:w-11">
                                    <FaCompass aria-hidden="true" />
                                </span>
                            </div>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </section>
    );
}
