"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { BarChart3, Globe, Zap, Users, Search, Megaphone } from "lucide-react";

export default function ServicesPage() {
    const services = [
        {
            icon: <Globe className="w-10 h-10" />,
            title: "Digital Strategy",
            description: "We build comprehensive roadmaps that align with your business goals. From market research to competitor analysis, we ensure every move is calculated for maximum impact.",
            features: ["Market Research", "Competitor Analysis", "Brand Positioning", "Growth Hacking"]
        },
        {
            icon: <BarChart3 className="w-10 h-10" />,
            title: "Data Analytics",
            description: "Turn raw data into actionable insights. We set up advanced tracking and reporting so you always know your ROI and can make informed decisions.",
            features: ["Google Analytics 4", "Conversion Tracking", "Custom Dashboards", "User Behavior Analysis"]
        },
        {
            icon: <Users className="w-10 h-10" />,
            title: "Social Media Management",
            description: "Build a loyal community around your brand. We create engaging content and manage interactions to foster genuine connections with your audience.",
            features: ["Content Creation", "Community Management", "Influencer Marketing", "Social Strategy"]
        },
        {
            icon: <Zap className="w-10 h-10" />,
            title: "Performance Marketing",
            description: "Result-oriented campaigns across all major platforms. We optimize for conversions, ensuring every dollar spent contributes to your bottom line.",
            features: ["Facebook & Instagram Ads", "Google PPC", "Retargeting Campaigns", "A/B Testing"]
        },
        {
            icon: <Search className="w-10 h-10" />,
            title: "SEO Optimization",
            description: "Increase your organic visibility and drive high-quality traffic. We implement technical and on-page SEO strategies to rank you higher on search engines.",
            features: ["Keyword Research", "On-Page Optimization", "Technical SEO Audits", "Link Building"]
        },
        {
            icon: <Megaphone className="w-10 h-10" />,
            title: "Content Marketing",
            description: "Tell your story in a way that resonates. We produce high-quality blogs, articles, and video scripts that establish your authority in the industry.",
            features: ["Blog Writing", "Copywriting", "Video Scripts", "Email Newsletters"]
        }
    ];

    return (
        <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-blue selection:text-brand-dark">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-blue/10 rounded-full blur-[120px]" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Our <span className="text-brand-blue">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Comprehensive digital solutions engineered for growth. We combine creativity with data to deliver measurable results.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group"
                            >
                                <div className="mb-6 p-4 bg-gradient-to-br from-brand-blue/20 to-brand-teal/20 rounded-2xl w-fit text-brand-blue group-hover:text-white group-hover:from-brand-blue group-hover:to-brand-teal transition-all">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-blue transition-colors">{service.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm text-gray-500">
                                            <span className="w-1.5 h-1.5 bg-brand-teal rounded-full mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark to-black" />
                <div className="absolute bottom-0 left-0 w-full h-full bg-brand-blue/5 skew-y-3 transform origin-bottom-left" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto bg-gradient-to-br from-white/10 to-transparent p-12 rounded-3xl border border-white/10 backdrop-blur-xl"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to scale your business?</h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Let's build a strategy that works for you. No fluff, just results.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-4 bg-brand-blue text-brand-dark font-bold rounded-full hover:bg-white hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] transition-all transform hover:scale-105"
                        >
                            Get a Free Consultation
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
