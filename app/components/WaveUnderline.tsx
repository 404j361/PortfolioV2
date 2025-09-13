import { motion } from "framer-motion";

export default function WaveUnderline() {
    return (
        <motion.div
            className="flex justify-center mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
        >
            <svg
                width="80"
                height="12"
                viewBox="0 0 80 12"
                className="text-yellow-700"
            >
                <motion.path
                    d="M0,6 Q10,0 20,6 T40,6 T60,6 T80,6"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                />
                <motion.path
                    d="M0,8 Q10,4 20,8 T40,8 T60,8 T80,8"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.6"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                        duration: 1.2,
                        ease: "easeInOut",
                        delay: 0.4,
                    }}
                />
            </svg>
        </motion.div>
    );
}
