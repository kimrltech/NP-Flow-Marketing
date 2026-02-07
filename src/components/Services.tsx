"use client";

import { motion } from "framer-motion";
import { BarChart3, Globe, Zap, Users } from "lucide-react";

const services = [
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Digital Strategy",
        description: "Comprehensive roadmaps designed to position your brand as a market leader.",
    },
    {
        icon: <BarChart3 className="w-8 h-8" />,
        title: "Data Analytics",
        description: "Turn raw data into actionable insights that drive measurable growth and ROI.",
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Social Media",
        description: "Engaging content strategies that build community and amplify your voice.",
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Performance Marketing",
        description: "Optimized campaigns across all channels to maximize conversion rates.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 relative bg-brand-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-teal">
                        Our Expertise
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We combine creativity with data to deliver full-spectrum marketing solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-blue/50 hover:bg-white/10 transition-all group"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-teal/20 text-brand-blue group-hover:text-white group-hover:from-brand-blue group-hover:to-brand-teal transition-all w-fit">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
