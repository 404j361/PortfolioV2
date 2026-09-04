"use client";

import React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaX } from "react-icons/fa6";
import { createPortal } from "react-dom";

/* ================= TYPES ================= */

interface LetterDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
}

type ProjectDialogContent = {
  description?: string | React.ReactNode;
  images?: string[];
  responsibilities?: string[];
  demoUrl?: {
    play?: string;
    appstore?: string;
    web?: string;
  };
  disclaimer?: string;
};

type LetterDialogTriggerProps = {
  children: React.ReactNode;
  dialog: React.ReactNode | ProjectDialogContent;
  title?: string;
  className?: string;
};

/* ================= MAIN DIALOG ================= */

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
    if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[color:var(--obsidian)]/72 backdrop-blur-md"
          />

          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-auto"
            onClick={handleBackdropClick}
          >
            <motion.div
              ref={dialogRef}
              initial={{ scale: 0.8, opacity: 0, rotateY: -10 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative max-h-[90vh] w-full max-w-4xl perspective-1000"
            >
              <motion.div
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className={`glass-panel relative overflow-hidden rounded-[32px] shadow-2xl ${
                  className || ""
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="relative z-10 h-full overflow-y-auto p-6 text-[color:var(--pearl)] md:p-8"
                >
                  <button
                    onClick={onClose}
                    className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/15 text-[color:var(--pearl)] transition-colors hover:border-[color:var(--cyan)] hover:text-[color:var(--cyan)]"
                    aria-label="Close dialog"
                  >
                    <FaX className="h-4 w-4" />
                  </button>

                  {title && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.4,
                      }}
                      className="mb-8 pr-12"
                    >
                      <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] text-[color:var(--pearl)]">{title}</h2>
                      <div className="mt-4 h-px w-32 bg-gradient-to-r from-[color:var(--cyan)] to-transparent"></div>
                    </motion.div>
                  )}

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
    document.body,
  );
}

/* ================= PROJECT LAYOUT ================= */

function ProjectDialogLayout({
  description,
  images,
  responsibilities,
  demoUrl,
  disclaimer,
}: ProjectDialogContent) {
  return (
    <div className="space-y-6">
      {description && (
        <p className="whitespace-pre-line text-base leading-8 text-[color:var(--mist)]">
          {description}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images &&
          images.map((src, i) => {
            const isOnlyOne = images.length === 1;
            const isLast = i === images.length - 1;
            const isOddCount = images.length % 2 !== 0;

            const shouldBeFullWidth = isOnlyOne || (isLast && isOddCount);

            return (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.08,
                  zIndex: 20,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className={`
                  relative w-full overflow-hidden rounded-[22px] border border-white/10
                  ${shouldBeFullWidth ? "sm:col-span-2" : ""}
                  aspect-[16/9] cursor-pointer
                `}
              >
                <motion.img
                  src={"/images/projects/" + src}
                  alt={`Project screenshot ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* glow effect */}
                <div className="pointer-events-none absolute inset-0 bg-[color:var(--cyan)]/0 opacity-0 transition-opacity duration-300 hover:opacity-100" />
              </motion.div>
            );
          })}
      </div>

      {responsibilities && responsibilities.length > 0 && (
        <div>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--cyan)]">
            Responsibilities
          </h3>
          <ul className="space-y-2 text-sm leading-7 text-[color:var(--mist)]">
            {responsibilities.map((item, i) => (
              <li key={i} className="border-l border-white/15 pl-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {disclaimer && (
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-sm italic leading-6 text-[color:var(--muted)]">
          <strong className="text-[color:var(--mist)]">Disclaimer:</strong> {disclaimer}
        </div>
      )}

      {demoUrl && (
        <div className="flex flex-col sm:flex-row gap-3">
          {demoUrl.web && (
            <a
              href={demoUrl.web}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 w-full items-center justify-center rounded-full bg-[color:var(--pearl)] px-3 py-3 text-xs font-bold text-[color:var(--obsidian)] transition hover:scale-[1.02] active:scale-[0.98]"
            >
              Visit Site
            </a>
          )}

          {demoUrl.play && (
            <a
              href={demoUrl.play}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 w-full items-center justify-center rounded-full border border-white/15 px-3 py-3 text-xs font-bold text-[color:var(--pearl)] transition hover:border-[color:var(--cyan)] hover:text-[color:var(--cyan)]"
            >
              Get on Play Store
            </a>
          )}

          {demoUrl.appstore && (
            <a
              href={demoUrl.appstore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 w-full items-center justify-center rounded-full border border-white/15 px-3 py-3 text-xs font-bold text-[color:var(--pearl)] transition hover:border-[color:var(--cyan)] hover:text-[color:var(--cyan)]"
            >
              Download on App Store
            </a>
          )}
        </div>
      )}
    </div>
  );
}

/* ================= TRIGGER ================= */

export function LetterDialogTrigger({
  children,
  dialog,
  title,
  className,
}: LetterDialogTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isProjectDialog =
    typeof dialog === "object" &&
    dialog !== null &&
    !React.isValidElement(dialog);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {children}
      </div>

      <LetterDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        className={`${className} md:max-h-[85vh] overflow-y-auto`}
      >
        {isProjectDialog ? (
          <ProjectDialogLayout {...(dialog as ProjectDialogContent)} />
        ) : (
          dialog
        )}
      </LetterDialog>
    </>
  );
}
