import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaServer, FaShip } from "react-icons/fa";

type Props = { parchmentStyle: string };

const groups = [
    {
        title: "Interface",
        icon: FaCode,
        detail: "Crisp product surfaces, responsive systems, and accessible interaction.",
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "SvelteKit", "Remix"],
    },
    {
        title: "Services",
        icon: FaServer,
        detail: "APIs, realtime flows, backend foundations, and maintainable delivery paths.",
        skills: ["Node.js", "NestJS", "Go", "Go Chi", "Laravel", "WebSocket"],
    },
    {
        title: "Operations",
        icon: FaShip,
        detail: "Shipping discipline across cloud, design handoff, deployment, and automation.",
        skills: ["Docker", "Kubernetes", "CI/CD", "GitHub", "Figma", "DigitalOcean", "AWS"],
    },
    {
        title: "Data",
        icon: FaDatabase,
        detail: "Readable models, fast queries, caching, and storage that survives scale.",
        skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Prisma", "Mongoose", "SQLC"],
    },
];

export default function Skills({ parchmentStyle }: Props) {
    return (
        <motion.section
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45 }}
            className={parchmentStyle}
            id="skills"
        >
            <div className="mb-8 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
                <div>
                    <p className="eyebrow">Capability deck</p>
                    <h2 className="font-display mt-3 text-4xl font-semibold tracking-[-0.03em] text-[color:var(--pearl)] md:text-6xl">
                        Sharp tools. Calm hands.
                    </h2>
                </div>
                <p className="max-w-xl text-base leading-7 text-[color:var(--mist)]">
                    A practical stack for building interfaces people trust and systems teams can keep moving.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {groups.map((group) => {
                    const Icon = group.icon;
                    return (
                        <motion.article
                            key={group.title}
                            whileHover={{ y: -6 }}
                            transition={{ type: "spring", stiffness: 320, damping: 26 }}
                            className="glass-card group rounded-[28px] p-6 transition-colors hover:border-[color:var(--cyan)]/45 md:p-7"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-2xl font-semibold text-[color:var(--pearl)]">
                                        {group.title}
                                    </h3>
                                    <p className="mt-3 min-h-14 text-sm leading-7 text-[color:var(--mist)]">
                                        {group.detail}
                                    </p>
                                </div>
                                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[color:var(--cyan)]/12 text-[color:var(--cyan)]">
                                    <Icon aria-hidden="true" />
                                </span>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-xs font-semibold text-[color:var(--mist)] transition-colors group-hover:border-white/18"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.article>
                    );
                })}
            </div>
        </motion.section>
    );
}
