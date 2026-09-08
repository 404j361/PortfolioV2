"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const routeDots = [
    { left: "29%", top: "61%", delay: 0 },
    { left: "39%", top: "54%", delay: 0.18 },
    { left: "50%", top: "49%", delay: 0.36 },
    { left: "61%", top: "43%", delay: 0.54 },
    { left: "72%", top: "35%", delay: 0.72 },
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
                className="absolute left-[48%] top-[23%] h-[17rem] w-[17rem] -translate-x-1/2 rounded-full border border-[color:var(--cyan)]/20 md:h-[23rem] md:w-[23rem]"
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 80, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{ x: ringX, y: ringY }}
            >
                <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[color:var(--cyan)]/15" />
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[color:var(--cyan)]/15" />
                <span className="absolute inset-[24%] rounded-full border border-white/10" />
                <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--coral)] shadow-[0_0_28px_rgba(255,107,122,0.8)]" />
            </motion.div>

            <div className="map-chip absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--coral)] shadow-[0_0_18px_rgba(255,107,122,0.8)]" />
                Privateer map
            </div>

            <motion.svg
                className="absolute -inset-[8%] h-[116%] w-[116%]"
                viewBox="0 0 900 680"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
                aria-hidden="true"
                style={{ x: chartX, y: chartY }}
            >
                <defs>
                    <linearGradient id="route" x1="192" x2="742" y1="432" y2="222" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#61f4ff" stopOpacity="0.08" />
                        <stop offset="0.42" stopColor="#61f4ff" stopOpacity="0.9" />
                        <stop offset="1" stopColor="#ffd36e" stopOpacity="0.72" />
                    </linearGradient>
                    <linearGradient id="seaDepth" x1="80" x2="860" y1="90" y2="590" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#76b8bf" stopOpacity="0.42" />
                        <stop offset="0.55" stopColor="#447f91" stopOpacity="0.48" />
                        <stop offset="1" stopColor="#315f78" stopOpacity="0.46" />
                    </linearGradient>
                    <linearGradient id="land" x1="128" x2="870" y1="90" y2="560" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#f2d6a1" stopOpacity="0.72" />
                        <stop offset="0.45" stopColor="#779a76" stopOpacity="0.58" />
                        <stop offset="1" stopColor="#283f35" stopOpacity="0.7" />
                    </linearGradient>
                    <radialGradient id="portGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(486 350) rotate(90) scale(88)">
                        <stop stopColor="#61f4ff" stopOpacity="0.72" />
                        <stop offset="1" stopColor="#61f4ff" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="islandGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(286 254) rotate(90) scale(140)">
                        <stop stopColor="#ffd36e" stopOpacity="0.25" />
                        <stop offset="1" stopColor="#ffd36e" stopOpacity="0" />
                    </radialGradient>
                    <pattern id="soundings" width="54" height="54" patternUnits="userSpaceOnUse">
                        <path d="M0 27 H54 M27 0 V54" stroke="#f4f7ff" strokeOpacity="0.055" strokeWidth="1" />
                    </pattern>
                    <filter id="mapGrain" x="-20%" y="-20%" width="140%" height="140%">
                        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="11" />
                        <feColorMatrix type="saturate" values="0" />
                        <feComponentTransfer>
                            <feFuncA type="table" tableValues="0 0.14" />
                        </feComponentTransfer>
                    </filter>
                    <filter id="paperEdge" x="-10%" y="-10%" width="120%" height="120%">
                        <feTurbulence type="fractalNoise" baseFrequency="0.022" numOctaves="3" seed="4" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" />
                    </filter>
                    <filter id="softGlow" x="-80%" y="-80%" width="260%" height="260%">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <path id="westIsland" d="M126 276 C148 212 202 182 246 204 C292 226 288 270 332 294 C370 314 404 334 392 374 C376 426 294 424 238 406 C184 388 102 346 126 276 Z" />
                    <path id="centerIsland" d="M370 328 C422 286 500 306 520 364 C542 428 494 490 432 482 C376 474 328 420 340 372 C346 350 354 340 370 328 Z" />
                    <path id="eastCoast" d="M706 -24 C676 56 708 112 688 176 C666 244 606 260 620 330 C636 410 712 430 704 498 C696 560 638 598 652 696 L926 696 L926 -24 Z" />
                </defs>

                <rect width="900" height="680" fill="url(#seaDepth)" />
                <rect width="900" height="680" fill="url(#soundings)" opacity="0.72" />
                <rect width="900" height="680" filter="url(#mapGrain)" opacity="0.9" />

                <g opacity="0.38" stroke="#101522" strokeWidth="1.2" fill="none">
                    <path d="M-20 132 C116 86 234 74 346 114 C470 158 564 136 674 80 C760 38 836 34 930 58" />
                    <path d="M-18 178 C138 132 264 126 378 166 C500 210 604 186 718 130 C792 94 850 88 924 108" />
                    <path d="M-24 496 C110 456 232 468 346 520 C482 582 622 552 742 482 C818 438 868 426 932 428" />
                    <path d="M-18 548 C118 516 240 526 352 568 C500 624 640 590 760 526 C828 490 880 484 932 492" />
                </g>

                <circle cx="404" cy="346" r="140" fill="none" stroke="#61f4ff" strokeOpacity="0.24" strokeWidth="2" strokeDasharray="14 16" />
                <circle cx="404" cy="346" r="82" fill="none" stroke="#f4f7ff" strokeOpacity="0.18" />
                <circle cx="404" cy="346" r="8" fill="#61f4ff" />

                <use href="#eastCoast" fill="url(#land)" stroke="#1a2a26" strokeOpacity="0.4" strokeWidth="2" filter="url(#paperEdge)" />
                <use href="#westIsland" fill="url(#land)" stroke="#1a2a26" strokeOpacity="0.48" strokeWidth="2" filter="url(#paperEdge)" />
                <use href="#centerIsland" fill="url(#land)" stroke="#1a2a26" strokeOpacity="0.46" strokeWidth="2" filter="url(#paperEdge)" />
                <path d="M286 142 C318 126 348 140 352 166 C330 162 302 168 282 184 Z" fill="url(#land)" stroke="#1a2a26" strokeOpacity="0.34" />
                <path d="M536 454 C584 434 642 468 670 514 C616 506 574 500 524 472 Z" fill="url(#land)" stroke="#1a2a26" strokeOpacity="0.32" />
                <path d="M632 548 C676 524 744 544 792 594 C726 586 682 584 620 562 Z" fill="url(#land)" stroke="#1a2a26" strokeOpacity="0.28" />
                <circle cx="280" cy="258" r="130" fill="url(#islandGlow)" />

                <g stroke="#101522" strokeOpacity="0.34" strokeWidth="1" fill="none">
                    <path d="M716 22 C768 70 826 64 878 96" />
                    <path d="M696 154 C754 182 818 160 890 206" />
                    <path d="M704 246 C758 286 824 270 884 316" />
                    <path d="M720 356 C778 388 812 408 884 406" />
                    <path d="M128 278 C178 286 238 250 288 276" />
                    <path d="M160 340 C224 356 284 338 356 360" />
                    <path d="M364 374 C414 354 458 368 508 410" />
                </g>

                <path className="route-line" d="M238 242 C348 198 428 236 492 318 C560 406 648 340 748 252" stroke="url(#route)" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M406 346 C510 392 562 456 640 560" stroke="#f4f7ff" strokeOpacity="0.62" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M382 358 C308 440 236 436 156 392" stroke="#61f4ff" strokeOpacity="0.42" strokeWidth="1.8" strokeDasharray="8 13" />

                <circle cx="238" cy="242" r="10" fill="#61f4ff" fillOpacity="0.22" stroke="#61f4ff" strokeOpacity="0.7" />
                <circle cx="748" cy="252" r="8" fill="#ffd36e" fillOpacity="0.74" />
                <circle cx="640" cy="560" r="8" fill="#f4f7ff" fillOpacity="0.64" />
                <circle cx="486" cy="350" r="88" fill="url(#portGlow)" />
                <circle cx="486" cy="350" r="8" fill="#ff6b7a" filter="url(#softGlow)" />

                <g fill="#101522" fillOpacity="0.58" fontSize="11" fontWeight="800" letterSpacing="1.6">
                    <text x="176" y="282">CACHE-A</text>
                    <text x="176" y="298">LACRE-A</text>
                    <text x="694" y="238">DL FORT</text>
                    <text x="680" y="254">FORT QUESSL</text>
                    <text x="696" y="512">FORT QUESSL</text>
                </g>

                <g fill="#f4f7ff" fillOpacity="0.8" fontSize="11" fontWeight="800" letterSpacing="1.4">
                    <text x="492" y="338">BANGKOK</text>
                    <text x="136" y="418">YANGON</text>
                    <text x="666" y="598">SINGAPORE</text>
                </g>

                <g transform="translate(112 526)" opacity="0.42">
                    <circle r="44" stroke="#101522" strokeOpacity="0.55" />
                    <circle r="26" stroke="#101522" strokeOpacity="0.35" />
                    <path d="M0 -44 V44 M-44 0 H44" stroke="#101522" strokeOpacity="0.42" />
                    <path d="M0 -38 L10 0 L0 38 L-10 0 Z" fill="#101522" fillOpacity="0.44" />
                    <text x="-6" y="-50" fill="#101522" fillOpacity="0.58" fontSize="10" fontWeight="800">N</text>
                </g>

                <g fill="#101522" fillOpacity="0.68" fontSize="24" fontWeight="900">
                    <text x="188" y="242">X</text>
                    <text x="616" y="246">X</text>
                    <text x="606" y="452">X</text>
                </g>
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
                className="map-float absolute right-5 top-5 hidden w-48 rounded-2xl p-4 text-right md:block"
                style={{ x: badgeX }}
                aria-hidden="true"
            >
                {["LAT 13.7563 N", "LONG 100.5018 E", "BUILD 362 ACTIVE"].map((label) => (
                    <div key={label} className="grid grid-cols-[2.5rem_1fr] items-center gap-3 text-[0.61rem] font-bold uppercase tracking-[0.14em]">
                        <span className="h-px bg-[color:var(--gold)]/35" />
                        <span>{label}</span>
                    </div>
                ))}
            </motion.div>

            <motion.div
                className="map-float absolute right-5 top-[43%] hidden w-40 overflow-hidden rounded-2xl text-[0.66rem] font-semibold shadow-[0_18px_50px_rgba(0,0,0,0.24)] md:block"
                style={{ x: badgeX }}
                aria-hidden="true"
            >
                <div className="flex items-center justify-between border-b border-[color:var(--line)] px-3 py-2">
                    <span className="text-[0.62rem] uppercase tracking-[0.16em]">Voyage log</span>
                    <span>v</span>
                </div>
                <div className="space-y-1 px-3 py-2 leading-5">
                    <p>01: Voyage begins</p>
                    <p>03: Port UI-Hall Cache</p>
                    <p>04: Fort Quessel Contact</p>
                </div>
            </motion.div>

            <motion.div
                className="map-name-plate absolute bottom-8 left-8 rounded-[28px] p-5"
                style={{ x: badgeX, y: badgeY }}
            >
                <p className="font-display text-5xl font-semibold leading-none text-[color:var(--pearl)]">Jinn</p>
                <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[color:var(--cyan)]">Captain Jinn</p>
            </motion.div>
        </motion.div>
    );
}
