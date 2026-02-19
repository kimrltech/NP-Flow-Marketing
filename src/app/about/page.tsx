"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, TrendingUp } from "lucide-react";
import Image from "next/image";
import FlowAnimation from "@/components/FlowAnimation";

export default function AboutPage() {
    const values = [
        {
            icon: <Target className="w-8 h-8" />,
            title: "Precision",
            description: "We don't guess. We analyze, strategize, and execute with pinpoint accuracy."
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Innovation",
            description: "Staying ahead of the curve is in our DNA. We leverage the latest tech to give you an edge."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Partnership",
            description: "We are not just a vendor; we are your growth partners, invested in your success."
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Results",
            description: "At the end of the day, only one thing matters: measurable growth for your business."
        }
    ];

    return (
        <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-blue selection:text-brand-dark">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-teal/10 rounded-full blur-[120px] animate-pulse delay-700" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        About <span className="text-brand-blue">NP Flow</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        We are a team of data-driven marketers and creative strategists dedicated to helping brands navigate the complex digital landscape.
                    </motion.p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-white/5 backdrop-blur-sm border-y border-white/10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="md:w-1/2"
                        >
                            <div className="relative w-full h-96 rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                                <FlowAnimation />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="md:w-1/2"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built on <span className="text-brand-teal">Flow</span></h2>
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                "Flow" isn't just a name; it's our philosophy. In marketing, friction kills conversions. Our mission is to create seamless experiences that guide your customers effortlessly from discovery to purchase.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                We believe in transparency, agility, and the power of data. By constantly analyzing performance metrics, we adapt our strategies in real-time, ensuring your brand stays ahead of market trends.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Core Values</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 bg-black/40 border border-white/10 rounded-2xl hover:border-brand-blue/50 transition-all text-center group"
                            >
                                <div className="mb-6 inline-block p-4 bg-brand-blue/10 rounded-full text-brand-blue group-hover:scale-110 transition-transform">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6 text-center">
                    <div className="bg-gradient-to-r from-brand-blue to-brand-teal p-1 rounded-3xl">
                        <div className="bg-brand-dark rounded-[22px] p-12 md:p-20">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Let's Create Something Specific.</h2>
                            <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
                                Your business is unique, and your marketing strategy should be too.
                            </p>
                            <a
                                href="/contact"
                                className="inline-block px-10 py-4 bg-white text-brand-dark font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg shadow-white/10"
                            >
                                Contact Us Today
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
