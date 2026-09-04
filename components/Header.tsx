"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaAnchor, FaBars, FaCompass, FaFeatherAlt, FaSkullCrossbones, FaTimes } from "react-icons/fa";

const navItems = [
    { href: "#skills", label: "Skills", icon: FaFeatherAlt },
    { href: "#recent-projects", label: "Projects", icon: FaCompass },
    { href: "#work-history", label: "Voyage", icon: FaAnchor },
    { href: "#contact", label: "Contact", icon: FaFeatherAlt },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                isMobileMenuOpen &&
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target as Node)
            ) {
                setIsMobileMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMobileMenuOpen]);

    return (
        <motion.header
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed left-0 right-0 top-0 z-50 px-4 pt-3 md:px-8"
        >
            <div className="glass-panel mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full px-3 md:px-4">
                <a href="#" className="group flex items-center gap-3" aria-label="Captain Jinn home">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-[color:var(--pearl)] text-[color:var(--obsidian)] transition-transform duration-300 group-hover:scale-105">
                        <FaSkullCrossbones aria-hidden="true" />
                    </span>
                    <span className="grid leading-none">
                        <span className="text-base font-bold tracking-[0.04em] text-[color:var(--pearl)] md:text-lg">
                            Captain Jinn
                        </span>
                        <span className="mt-1 hidden text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[color:var(--cyan)] sm:block">
                            Interface Privateer
                        </span>
                    </span>
                </a>

                <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                className="group inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--mist)] transition-colors hover:bg-white/10 hover:text-[color:var(--pearl)] active:scale-[0.98]"
                            >
                                <Icon className="text-[0.8rem] text-[color:var(--cyan)]" aria-hidden="true" />
                                {item.label}
                            </a>
                        );
                    })}
                </nav>

                <button
                    onClick={() => setIsMobileMenuOpen((value) => !value)}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-[color:var(--pearl)] transition-colors hover:bg-white/10 lg:hidden"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        ref={mobileMenuRef}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="mt-3 rounded-[28px] border border-white/10 bg-[color:var(--void)]/92 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
                    >
                        <nav className="mx-auto grid max-w-6xl gap-1" aria-label="Mobile navigation">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex min-h-12 items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--mist)] transition-colors hover:bg-white/10 hover:text-[color:var(--pearl)]"
                                    >
                                        <Icon className="text-[color:var(--cyan)]" aria-hidden="true" />
                                        {item.label}
                                    </a>
                                );
                            })}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
