"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Start flow logic here
        console.log(formState);
    };

    return (
        <section className="relative py-24 min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-teal/10 rounded-full blur-[120px] animate-pulse delay-700" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        Let's Start Your <span className="text-brand-blue">Growth</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Ready to elevate your brand? Reach out to us and let's discuss how we can engineer your success.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Contact Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/3 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl h-full"
                    >
                        <h3 className="text-2xl font-bold text-white mb-8">Contact Info</h3>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-blue/20 rounded-xl text-brand-blue">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Email Us</p>
                                    <a href="mailto:support@npflowmarketing.com" className="text-white hover:text-brand-blue transition-colors font-medium">
                                        support@npflowmarketing.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-teal/20 rounded-xl text-brand-teal">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Call Us</p>
                                    <a href="tel:+1234567890" className="text-white hover:text-brand-blue transition-colors font-medium">
                                        +1 (555) 123-4567
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/10 rounded-xl text-white">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">
                                        30 Russek Dr<br />
                                        Staten Island, NY 10312
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10">
                            <p className="text-gray-500 text-sm">
                                We typically respond within 24 hours.
                            </p>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:w-2/3 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                                        placeholder="John Doe"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                                        placeholder="john@example.com"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-300 ml-1">Subject</label>
                                <select
                                    id="subject"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                                    value={formState.subject}
                                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                >
                                    <option value="" className="bg-brand-dark">Select a topic...</option>
                                    <option value="Strategy" className="bg-brand-dark">Digital Strategy</option>
                                    <option value="Analytics" className="bg-brand-dark">Data Analytics</option>
                                    <option value="Social" className="bg-brand-dark">Social Media</option>
                                    <option value="Performance" className="bg-brand-dark">Performance Marketing</option>
                                    <option value="Other" className="bg-brand-dark">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-brand-blue to-brand-teal text-white font-bold py-4 rounded-xl hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 group"
                            >
                                Send Message
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
