"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-teal/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 relative inline-block"
                >
                    <div className="w-full max-w-4xl mx-auto h-48 md:h-80 relative mb-8">
                        {/* Using the logo as the main visual element but styled nicely */}
                        <div
                            className="w-full h-full bg-[url('/assets/logo_new.jpg')] bg-contain bg-center bg-no-repeat drop-shadow-[0_0_30px_rgba(0,210,255,0.3)]"
                        />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
                >
                    Elevating Brands with <br />
                    <span className="text-brand-blue">Data-Driven Strategies</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    We flow with the market to deliver exceptional growth. Your partner in modern digital marketing.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-brand-blue text-brand-dark font-bold rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,210,255,0.4)]"
                    >
                        Start Your Growth
                    </a>
                    <a
                        href="#services"
                        className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
                    >
                        Explore Services
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
