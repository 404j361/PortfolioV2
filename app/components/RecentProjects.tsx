"use client";

import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaLayerGroup } from "react-icons/fa6";
import { LetterDialogTrigger } from "@/components/Dialog";
import { PROJECT_KEYS, projects } from "./projects";

type Props = {
    parchmentStyle: string;
};

const projectList = [
    projects[PROJECT_KEYS.SOCIAL_METRICA],
    projects[PROJECT_KEYS.LIFI_AI],
    projects[PROJECT_KEYS.YUMYUM],
    projects[PROJECT_KEYS.BAHOZAY],
    projects[PROJECT_KEYS.KEYBOARD_QUIZ],
    projects[PROJECT_KEYS.ZAY_MARKETS],
    projects[PROJECT_KEYS.SABANA_POS],
    projects[PROJECT_KEYS.JUWONG_API],
    projects[PROJECT_KEYS.FLAIM],
];

function cleanTitle(title: string) {
    return title.replace(/^[^\p{L}\p{N}]+/u, "").trim();
}

export default function RecentProjects({ parchmentStyle }: Props) {
    return (
        <motion.section
            id="recent-projects"
            className={parchmentStyle}
            initial={{ opacity: 0, y: 56 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="mb-8 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
                <div>
                    <p className="eyebrow">Selected voyages</p>
                    <h2 className="font-display mt-3 text-4xl font-semibold tracking-[-0.03em] text-[color:var(--pearl)] md:text-6xl">
                        Work with velocity.
                    </h2>
                </div>
                <p className="max-w-xl text-base leading-7 text-[color:var(--mist)]">
                    Products across analytics, AI, education, commerce, rewards, and developer learning.
                </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
                {projectList.map((p, index) => (
                    <motion.article
                        key={p.title}
                        initial={{ opacity: 0, y: 36 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        whileHover={{ y: -7 }}
                        transition={{ type: "spring", stiffness: 320, damping: 28 }}
                        className={`glass-card group flex min-h-[22rem] flex-col justify-between rounded-[28px] p-6 transition-colors hover:border-[color:var(--cyan)]/45 ${
                            index === 0 ? "lg:col-span-2" : ""
                        }`}
                    >
                        <div>
                            <div className="flex items-start justify-between gap-5">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
                                        Case {String(index + 1).padStart(2, "0")}
                                    </p>
                                    <h3 className="mt-3 text-2xl font-semibold text-[color:var(--pearl)]">
                                        {cleanTitle(p.title)}
                                    </h3>
                                </div>
                                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/[0.055] text-[color:var(--cyan)]">
                                    <FaLayerGroup aria-hidden="true" />
                                </span>
                            </div>

                            <p className="mt-5 text-sm font-semibold text-[color:var(--cyan)]/85">
                                {p.tech}
                            </p>
                            <p className="mt-5 line-clamp-4 text-sm leading-7 text-[color:var(--mist)]">
                                {p.dialog.description || p.description}
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {p.tags.slice(0, 4).map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-xs font-semibold text-[color:var(--mist)]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-3">
                            {p.url ? (
                                <a
                                    href={p.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[color:var(--pearl)] px-4 py-3 text-xs font-bold text-[color:var(--obsidian)] transition hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    Visit
                                    <FaArrowUpRightFromSquare aria-hidden="true" />
                                </a>
                            ) : (
                                <button
                                    className="min-h-12 cursor-not-allowed rounded-full border border-white/10 px-4 py-3 text-xs font-bold text-[color:var(--muted)]"
                                    disabled
                                >
                                    Private
                                </button>
                            )}

                            <LetterDialogTrigger title={cleanTitle(p.title)} dialog={p.dialog}>
                                <button className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/15 px-4 py-3 text-xs font-bold text-[color:var(--pearl)] transition hover:border-[color:var(--cyan)] hover:text-[color:var(--cyan)] active:scale-[0.98]">
                                    Details
                                </button>
                            </LetterDialogTrigger>
                        </div>
                    </motion.article>
                ))}
            </div>
        </motion.section>
    );
}
