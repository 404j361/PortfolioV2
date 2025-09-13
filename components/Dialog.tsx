"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaX } from "react-icons/fa6";
import { createPortal } from "react-dom";

interface LetterDialogProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    className?: string;
}

export function LetterDialog({
    isOpen,
    onClose,
    children,
    title,
    className,
}: LetterDialogProps) {
    const dialogRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (
            dialogRef.current &&
            !dialogRef.current.contains(e.target as Node)
        ) {
            onClose();
        }
    };

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                    />

                    {/* Letter Container */}
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        onClick={handleBackdropClick}
                    >
                        <motion.div
                            ref={dialogRef}
                            initial={{ scale: 0.8, opacity: 0, rotateY: -10 }}
                            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                            exit={{ scale: 0.8, opacity: 0, rotateY: 10 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="relative max-w-2xl w-full max-h-[90vh] perspective-1000"
                        >
                            {/* Letter Paper */}
                            <motion.div
                                initial={{
                                    scaleY: 0.1,
                                    scaleX: 0.9,
                                    rotateX: -90,
                                    transformOrigin: "center bottom",
                                }}
                                animate={{
                                    scaleY: 1,
                                    scaleX: 1,
                                    rotateX: 0,
                                    transformOrigin: "center bottom",
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: 0.1,
                                }}
                                className={`relative bg-[#f5e9c6] bg-[url('https://www.transparenttextures.com/patterns/old-mathematics.png')] border-4 border-yellow-700 rounded-xl shadow-xl overflow-hidden ${
                                    className || ""
                                }`}
                            >
                                {/* Letter content */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="relative z-10 p-8 h-full overflow-y-auto text-[#7c4a03] font-pirate"
                                >
                                    {/* Close button */}
                                    <button
                                        onClick={onClose}
                                        className="absolute top-4 right-4 p-2 rounded-full bg-yellow-200/30 hover:bg-yellow-300/50 transition-colors group"
                                    >
                                        <FaX className="w-5 h-5 text-[#7c4a03] group-hover:text-[#5a3602]" />
                                    </button>

                                    {/* Letter header */}
                                    {title && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                scale: 0.95,
                                            }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.4,
                                            }}
                                            className="text-center mb-6"
                                        >
                                            <h2 className="text-3xl font-bold mb-2">
                                                {title}
                                            </h2>
                                            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#7c4a03] to-transparent mx-auto"></div>
                                        </motion.div>
                                    )}

                                    {/* Letter body */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.6,
                                        }}
                                    >
                                        {children}
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}

type LetterDialogTriggerProps = {
    children: React.ReactNode;
    dialog: React.ReactNode;
    title?: string;
    className?: string;
};

export function LetterDialogTrigger({
    children,
    dialog,
    title,
    className,
}: LetterDialogTriggerProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div onClick={() => setIsOpen(true)} className="cursor-pointer">
                {children}
            </div>
            <LetterDialog
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title={title}
                className={className}
            >
                {dialog}
            </LetterDialog>
        </>
    );
}
