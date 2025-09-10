"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    FaSkullCrossbones,
    FaAnchor,
    FaFeatherAlt,
    FaMapMarkedAlt,
    FaBars,
    FaTimes,
} from "react-icons/fa";

type Props = {};

export default function Header({}: Props) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement | null>(null);

    // Close mobile menu on click outside
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
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    return (
        <motion.header
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="flex items-center justify-between py-4 md:py-6 px-4 md:px-8 bg-[url('https://www.transparenttextures.com/patterns/old-mathematics.png')] bg-[#f5e9c6] border-b-4 border-yellow-700 rounded-b-2xl shadow-2xl sticky top-0 z-50"
            style={{ backgroundBlendMode: "multiply" }}
        >
            {/* Logo & Title */}
            <a href="#" className="flex items-center gap-2 md:gap-4">
                <FaSkullCrossbones
                    size={32}
                    className="text-yellow-700 drop-shadow-lg md:w-12 md:h-12"
                />
                <span
                    className="text-xl md:text-4xl font-black tracking-wide md:tracking-widest pirate-text text-[#7c4a03] drop-shadow-lg"
                    style={{ fontFamily: "Papyrus, fantasy" }}
                >
                    <span className="hidden sm:inline">Captain Jinn</span>
                    <span className="sm:hidden">C. Jinn</span>
                </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex gap-6 text-lg font-semibold">
                <a
                    href="#skills"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 border-2 border-yellow-700 text-[#7c4a03] shadow hover:bg-yellow-200 transition-colors"
                >
                    <FaFeatherAlt /> Skills
                </a>
                <a
                    href="#recent-projects"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 border-2 border-yellow-700 text-[#7c4a03] shadow hover:bg-yellow-200 transition-colors"
                >
                    <FaMapMarkedAlt /> Projects
                </a>
                <a
                    href="#work-history"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 border-2 border-yellow-700 text-[#7c4a03] shadow hover:bg-yellow-200 transition-colors"
                >
                    <FaAnchor /> Work History
                </a>
                <a
                    href="#contact"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 border-2 border-yellow-700 text-[#7c4a03] shadow hover:bg-yellow-200 transition-colors"
                >
                    <FaSkullCrossbones /> Contact
                </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-full bg-yellow-100 border-2 border-yellow-700 text-[#7c4a03] shadow hover:bg-yellow-200 transition-colors"
            >
                {isMobileMenuOpen ? (
                    <FaTimes size={20} />
                ) : (
                    <FaBars size={20} />
                )}
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        ref={mobileMenuRef}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-[#f5e9c6] border-b-4 border-yellow-700 shadow-2xl lg:hidden"
                        style={{
                            backgroundImage:
                                "url('https://www.transparenttextures.com/patterns/old-mathematics.png')",
                            backgroundBlendMode: "multiply",
                        }}
                    >
                        <nav className="flex flex-col gap-2 p-4">
                            <a
                                href="#projects"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 rounded-full bg-yellow-100 border-2 border-yellow-700 text-[#7c4a03] shadow hover:bg-yellow-200 transition-colors text-base font-semibold"
                            >
                                <FaMapMarkedAlt /> Projects
                            </a>
                            <a
                                href="#skills"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 rounded-full bg-yellow-100 border-2 border-yellow-700 text-[#7c4a03] shadow hover:bg-yellow-200 transition-colors text-base font-semibold"
                            >
                                <FaFeatherAlt /> Skills
                            </a>
                            <a
                                href="#work-history"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 rounded-full bg-yellow-100 border-2 border-yellow-700 text-[#7c4a03] shadow hover:bg-yellow-200 transition-colors text-base font-semibold"
                            >
                                <FaAnchor /> Work History
                            </a>
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 rounded-full bg-yellow-100 border-2 border-yellow-700 text-[#7c4a03] shadow hover:bg-yellow-200 transition-colors text-base font-semibold"
                            >
                                <FaSkullCrossbones /> Contact
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
