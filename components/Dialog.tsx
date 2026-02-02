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
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
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
              className="relative max-w-2xl w-full max-h-[90vh] perspective-1000"
            >
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative z-10 p-8 h-full overflow-y-auto text-[#7c4a03] font-pirate"
                >
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-yellow-200/30 hover:bg-yellow-300/50 transition-colors group"
                  >
                    <FaX className="w-5 h-5 text-[#7c4a03] group-hover:text-[#5a3602]" />
                  </button>

                  {title && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.4,
                      }}
                      className="text-center mb-6"
                    >
                      <h2 className="text-3xl font-bold mb-2">{title}</h2>
                      <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#7c4a03] to-transparent mx-auto"></div>
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
}: ProjectDialogContent) {
  return (
    <div className="space-y-6">
      {description && (
        <p className="leading-relaxed text-lg whitespace-pre-line">
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
                  relative w-full overflow-hidden rounded-lg border-2 border-yellow-700 shadow-md
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
                <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300 bg-yellow-200/10" />
              </motion.div>
            );
          })}
      </div>

      {responsibilities && responsibilities.length > 0 && (
        <div>
          <h3 className="text-xl font-bold mb-3">My Responsibilities</h3>
          <ul className="list-disc pl-6 space-y-2 text-base">
            {responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {demoUrl && (
        <div className="flex flex-col sm:flex-row gap-3">
          {demoUrl.web && (
            <a
              href={demoUrl.web}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full gap-1 px-3 py-2 bg-yellow-100 text-yellow-900 text-sm font-semibold rounded-md border-2 border-yellow-700 shadow-md hover:bg-yellow-200 hover:scale-105 transform transition-all duration-300"
            >
              🌐 Visit Site
            </a>
          )}

          {demoUrl.play && (
            <a
              href={demoUrl.play}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full gap-1 px-3 py-2 bg-yellow-100 text-yellow-900 text-sm font-semibold rounded-md border-2 border-yellow-700 shadow-md hover:bg-yellow-200 hover:scale-105 transform transition-all duration-300"
            >
              Get on Play Store
            </a>
          )}

          {demoUrl.appstore && (
            <a
              href={demoUrl.appstore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full gap-1 px-3 py-2 bg-yellow-100 text-yellow-900 text-sm font-semibold rounded-md border-2 border-yellow-700 shadow-md hover:bg-yellow-200 hover:scale-105 transform transition-all duration-300"
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
