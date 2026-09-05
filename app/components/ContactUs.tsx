import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

type Props = { parchmentStyle: string };

const links = [
    {
        href: "mailto:dev.jinn221@gmail.com",
        label: "Email",
        value: "dev.jinn221@gmail.com",
        icon: FaEnvelope,
    },
    {
        href: "https://github.com/404j361",
        label: "GitHub",
        value: "404j361",
        icon: FaGithub,
    },
    {
        href: "https://www.linkedin.com/in/wan-na-aung-3a5b692b6/",
        label: "LinkedIn",
        value: "Wan Na Aung",
        icon: FaLinkedinIn,
    },
];

export default function ContactUs({ parchmentStyle }: Props) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 56 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`${parchmentStyle} pb-24`}
            id="contact"
        >
            <div className="glass-panel overflow-hidden rounded-[32px] p-6 md:p-10">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <div>
                        <p className="eyebrow">Signal channel</p>
                        <h2 className="font-display mt-3 text-4xl font-semibold tracking-[-0.03em] text-[color:var(--pearl)] md:text-6xl">
                            Let the next build find its bearing.
                        </h2>
                    </div>

                    <div>
                        <p className="max-w-2xl text-base leading-8 text-[color:var(--mist)]">
                            Bring a product idea, a difficult interface, or a system that needs a steadier route.
                            I am open to focused collaborations and practical engineering work.
                        </p>

                        <div className="mt-8 grid gap-3 md:grid-cols-3">
                            {links.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                                        rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                                        className="group min-h-36 rounded-[24px] border border-white/10 bg-white/[0.055] p-5 transition hover:-translate-y-1 hover:border-[color:var(--cyan)]/45 active:scale-[0.99]"
                                    >
                                        <Icon className="text-xl text-[color:var(--cyan)]" aria-hidden="true" />
                                        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                                            {link.label}
                                        </p>
                                        <p className="mt-2 break-words text-sm font-semibold text-[color:var(--pearl)] group-hover:text-[color:var(--cyan)]">
                                            {link.value}
                                        </p>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
