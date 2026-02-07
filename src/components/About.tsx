"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-blue/5 skew-y-3 transform origin-top-left scale-110" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Why <span className="text-brand-blue">NP Flow?</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            In a crowded digital landscape, flow is everything. It's the seamless movement of a customer from discovery to conversion. At NP Flow Marketing, we engineer this flow using cutting-edge data analysis and creative storytelling.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            We don't just run campaigns; we build ecosystems where your brand thrives. Our mission is to elevate your business through strategies that are as adaptive as they are effective.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 relative"
                    >
                        <div className="relative z-10 bg-gradient-to-br from-brand-dark to-gray-900 p-8 rounded-3xl border border-white/10 shadow-2xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-12 w-12 rounded-full bg-brand-blue flex items-center justify-center text-brand-dark font-bold text-xl">1</div>
                                <div>
                                    <h4 className="font-bold text-white">Data-First Approach</h4>
                                    <p className="text-sm text-gray-400">Decisions backed by real metrics.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-12 w-12 rounded-full bg-brand-teal flex items-center justify-center text-brand-dark font-bold text-xl">2</div>
                                <div>
                                    <h4 className="font-bold text-white">Creative Excellence</h4>
                                    <p className="text-sm text-gray-400">Visuals that capture attention.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-brand-dark font-bold text-xl">3</div>
                                <div>
                                    <h4 className="font-bold text-white">Full Transparency</h4>
                                    <p className="text-sm text-gray-400">Clear reporting, no hidden fees.</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative blob behind card */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-teal/20 blur-3xl -z-10 rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
