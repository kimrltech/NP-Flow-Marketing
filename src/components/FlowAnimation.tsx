"use client";

import { motion } from "framer-motion";

export default function FlowAnimation() {
    return (
        <div className="relative w-full h-full overflow-hidden bg-brand-dark">
            {/* Base Gradient Layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-black to-brand-dark z-0" />

            {/* Moving Blobs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-brand-blue/20 rounded-full blur-[100px] z-10 mix-blend-screen"
            />

            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-brand-teal/20 rounded-full blur-[100px] z-10 mix-blend-screen"
            />

            <motion.div
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, 100, -100, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5,
                }}
                className="absolute top-[20%] left-[20%] w-[60%] h-[60%] bg-purple-500/10 rounded-full blur-[80px] z-10 mix-blend-screen"
            />

            {/* Grid Overlay */}
            <div className="absolute inset-0 z-20 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Content Overlay */}
            <div className="absolute inset-0 z-30 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <div className="relative inline-block">
                        <span className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal opacity-20 blur-sm absolute top-0 left-0 transform translate-x-1 translate-y-1">
                            FLOW
                        </span>
                        <span className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 relative z-10">
                            FLOW
                        </span>
                    </div>
                    <p className="text-brand-blue/80 text-sm mt-4 tracking-[0.3em] uppercase font-medium">
                        Strategy • Data • Growth
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
