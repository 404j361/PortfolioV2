import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

type Props = { parchmentStyle: string };

const achievements = [
    {
        value: "B.Sc.",
        title: "Computer Science",
        description: "University of the People.",
        status: "Academic foundation",
    },
    {
        value: "B.Sc.",
        title: "Business Administration",
        description: "Kamphaeng Phet Rajabhat University, Thailand.",
        status: "Current degree",
    },
];

export default function Achievement({ parchmentStyle }: Props) {
    return (
        <motion.section
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45 }}
            className={parchmentStyle}
            id="achievements"
        >
            <div className="mb-8 md:mb-12">
                <p className="eyebrow">Academic signal</p>
                <h2 className="font-display mt-3 text-4xl font-semibold tracking-[-0.03em] text-[color:var(--pearl)] md:text-6xl">
                    Two disciplines. One builder.
                </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {achievements.map((item) => (
                    <motion.article
                        key={item.title}
                        whileHover={{ y: -6 }}
                        transition={{ type: "spring", stiffness: 320, damping: 26 }}
                        className="glass-card relative overflow-hidden rounded-[28px] p-6 md:p-8"
                    >
                        <div className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--cyan)]/12 text-[color:var(--cyan)]">
                            <FaGraduationCap aria-hidden="true" />
                        </div>
                        <p className="font-display text-6xl font-semibold tracking-[-0.04em] text-[color:var(--gold)]">
                            {item.value}
                        </p>
                        <h3 className="mt-6 text-2xl font-semibold text-[color:var(--pearl)]">
                            {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-[color:var(--mist)]">
                            {item.description}
                        </p>
                        <p className="mt-5 inline-flex rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-xs font-semibold text-[color:var(--cyan)]">
                            {item.status}
                        </p>
                    </motion.article>
                ))}
            </div>
        </motion.section>
    );
}
