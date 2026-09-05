import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

type Props = { parchmentStyle: string };

const roles = [
    {
        title: "Fullstack Developer",
        company: "Myanmar Zarla Distribution",
        period: "2026-Present",
        href: "https://zarladistribution.com",
        summary:
            "Building and maintaining web applications, internal tools, and secure digital systems for distribution operations, ecommerce workflows, and business teams.",
        notes: ["Website and app development", "Internal business systems", "Security-minded delivery"],
        tags: ["Fullstack", "Web Apps", "Cybersecurity", "Ecommerce", "Operations"],
        current: true,
    },
    {
        title: "Senior Frontend Developer",
        company: "Sabahna Technology Co. Ltd",
        period: "2024-2026",
        href: "https://sabahna.com",
        summary:
            "Building social analytics products across Facebook, Instagram, and TikTok, with a focus on fast dashboards, clean data views, and maintainable frontend architecture.",
        notes: ["React and Next.js surfaces", "RTK Query data flows", "Mentorship and frontend architecture"],
        tags: ["React", "Next.js", "NestJS", "RTK Query", "Analytics"],
    },
    {
        title: "Fullstack Apprentice",
        company: "B8 ICT Solution",
        period: "2024",
        href: "https://b8ict.net",
        summary:
            "Built responsive business websites and application surfaces while sharpening production habits across design handoff, version control, and mobile-first delivery.",
        notes: ["React and Tailwind delivery", "Design-to-code implementation", "Cross-browser responsive QA"],
        tags: ["React", "Tailwind", "NestJS", "TanStack"],
    },
    {
        title: "Full-Stack Navigator",
        company: "Prodigy Team Malaysia",
        period: "2022-2024",
        href: "https://prodigy-team.com/",
        summary:
            "Led full-stack delivery across co-operator projects in Asia, spanning ecommerce, dashboards, backend services, server maintenance, and security hardening.",
        notes: ["Go, SQLC, Laravel", "PostgreSQL systems", "Security and uptime care"],
        tags: ["Go", "SQLC", "Laravel", "PostgreSQL", "Security"],
    },
];

export default function WorkHistory({ parchmentStyle }: Props) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 56 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={parchmentStyle}
            id="work-history"
        >
            <div className="mb-8 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
                <div>
                    <p className="eyebrow">Career route</p>
                    <h2 className="font-display mt-3 text-4xl font-semibold tracking-[-0.03em] text-[color:var(--pearl)] md:text-6xl">
                        Built in motion.
                    </h2>
                </div>
                <p className="max-w-xl text-base leading-7 text-[color:var(--mist)]">
                    A progression through product teams, commerce platforms, analytics tools, and hardened services.
                </p>
            </div>

            <div className="space-y-4">
                {roles.map((role, index) => (
                    <motion.article
                        key={`${role.company}-${role.period}`}
                        initial={{ opacity: 0, y: 36 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.18 }}
                        whileHover={{ x: 6 }}
                        transition={{ type: "spring", stiffness: 300, damping: 28 }}
                        className="glass-card grid gap-6 rounded-[28px] p-6 md:grid-cols-[11rem_1fr_auto] md:items-start md:p-7"
                    >
                        <div>
                            <p className="font-display text-4xl font-semibold text-[color:var(--gold)]">
                                {String(index + 1).padStart(2, "0")}
                            </p>
                            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                                {role.period}
                            </p>
                        </div>

                        <div>
                            <div className="flex flex-wrap items-center gap-3">
                                {role.current && (
                                    <span className="rounded-full bg-[color:var(--cyan)] px-3 py-1 text-xs font-bold text-[color:var(--obsidian)]">
                                        Current
                                    </span>
                                )}
                                <p className="text-sm font-semibold text-[color:var(--cyan)]">
                                    {role.company}
                                </p>
                            </div>
                            <h3 className="mt-3 text-2xl font-semibold text-[color:var(--pearl)]">
                                {role.title}
                            </h3>
                            <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:var(--mist)]">
                                {role.summary}
                            </p>

                            <div className="mt-5 grid gap-2 md:grid-cols-3">
                                {role.notes.map((note) => (
                                    <p key={note} className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-[color:var(--mist)]">
                                        {note}
                                    </p>
                                ))}
                            </div>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {role.tags.map((tag) => (
                                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-[color:var(--muted)]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <a
                            href={role.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-3 text-xs font-bold text-[color:var(--pearl)] transition hover:border-[color:var(--cyan)] hover:text-[color:var(--cyan)] active:scale-[0.98]"
                        >
                            Visit
                            <FaArrowUpRightFromSquare aria-hidden="true" />
                        </a>
                    </motion.article>
                ))}
            </div>
        </motion.section>
    );
}
