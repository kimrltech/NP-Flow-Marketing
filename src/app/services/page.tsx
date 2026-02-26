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
      description:
        "We build comprehensive roadmaps that align with your business goals. From market research to competitor analysis, we ensure every move is calculated for maximum impact.",
      features: [
        "Market Research",
        "Competitor Analysis",
        "Brand Positioning",
        "Growth Hacking",
      ],
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Data Analytics",
      description:
        "Turn raw data into actionable insights. We set up advanced tracking and reporting so you always know your ROI and can make informed decisions.",
      features: [
        "Google Analytics 4",
        "Conversion Tracking",
        "Custom Dashboards",
        "User Behavior Analysis",
      ],
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Social Media Management",
      description:
        "Build a loyal community around your brand. We create engaging content and manage interactions to foster genuine connections with your audience.",
      features: [
        "Content Creation",
        "Community Management",
        "Influencer Marketing",
        "Social Strategy",
      ],
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Performance Marketing",
      description:
        "Result-oriented campaigns across all major platforms. We optimize for conversions, ensuring every dollar spent contributes to your bottom line.",
      features: [
        "Facebook & Instagram Ads",
        "Google PPC",
        "Retargeting Campaigns",
        "A/B Testing",
      ],
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "SEO Optimization",
      description:
        "Increase your organic visibility and drive high-quality traffic. We implement technical and on-page SEO strategies to rank you higher on search engines.",
      features: [
        "Keyword Research",
        "On-Page Optimization",
        "Technical SEO Audits",
        "Link Building",
      ],
    },
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "Content Marketing",
      description:
        "Tell your story in a way that resonates. We produce high-quality blogs, articles, and video scripts that establish your authority in the industry.",
      features: [
        "Blog Writing",
        "Copywriting",
        "Video Scripts",
        "Email Newsletters",
      ],
    },
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
            Comprehensive digital solutions engineered for growth. We combine
            creativity with data to deliver measurable results.
          </motion.p>
        </div>
      </section>
      {/* Products / Pricing Section */}
      <section className="py-24 relative bg-black/40 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-teal"
            >
              Growth Programs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 max-w-2xl mx-auto text-lg"
            >
              Select the level of strategic engagement that fits your current
              business stage.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Tier 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative flex flex-col bg-brand-dark border border-white/10 rounded-3xl p-8 hover:border-brand-blue/50 transition-all group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Globe className="w-24 h-24 text-brand-blue" />
              </div>
              <div className="relative z-10 flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">
                  Starter Market Insight
                </h3>
                <div className="text-3xl font-black text-brand-blue mb-4">
                  $500
                </div>
                <p className="text-gray-400 text-sm mb-6 pb-6 border-b border-white/10">
                  Perfect for businesses that need expert direction and clarity.
                </p>

                <div className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
                  What you get:
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start text-sm text-gray-300">
                    <div className="mt-1 mr-3 w-4 h-4 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                    </div>
                    60-minute 1-on-1 strategy consultation
                  </li>
                  <li className="flex items-start text-sm text-gray-300">
                    <div className="mt-1 mr-3 w-4 h-4 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                    </div>
                    High-level marketing performance review
                  </li>
                  <li className="flex items-start text-sm text-gray-300">
                    <div className="mt-1 mr-3 w-4 h-4 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                    </div>
                    Target audience & positioning analysis
                  </li>
                  <li className="flex items-start text-sm text-gray-300">
                    <div className="mt-1 mr-3 w-4 h-4 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                    </div>
                    Identification of growth opportunities and gaps
                  </li>
                  <li className="flex items-start text-sm text-gray-300">
                    <div className="mt-1 mr-3 w-4 h-4 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                    </div>
                    Actionable recommendations for immediate implementation
                  </li>
                </ul>
              </div>
              <div className="mt-auto relative z-10">
                <div className="p-3 bg-white/5 rounded-xl text-xs text-gray-400 mb-6 border border-white/5 italic">
                  Best for: New businesses, early-stage brands, or companies
                  needing quick expert guidance.
                </div>
                <a
                  href="https://buy.stripe.com/dRmdR9buk2IdcOb6GT7ss03"
                  className="block w-full text-center py-4 rounded-xl border border-white/20 text-white font-bold hover:bg-white hover:text-black transition-all"
                >
                  Purchase Session
                </a>
              </div>
            </motion.div>

            {/* Tier 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col bg-brand-dark border border-white/10 rounded-3xl p-8 hover:border-brand-teal/50 transition-all group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <BarChart3 className="w-24 h-24 text-brand-teal" />
              </div>
              <div className="relative z-10 flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">
                  Strategic Growth
                </h3>
                <div className="text-3xl font-black text-brand-teal mb-4">
                  $1,000
                </div>
                <p className="text-gray-400 text-sm mb-6 pb-6 border-b border-white/10">
                  A deeper evaluation with a clear roadmap for measurable
                  improvement.
                </p>

                <div className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
                  What you get:
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start text-sm text-gray-300">
                    <div className="mt-1 mr-3 w-4 h-4 rounded-full bg-brand-teal/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-brand-teal rounded-full" />
                    </div>
                    90-minute in-depth consultation session
                  </li>
                  <li className="flex items-start text-sm text-gray-300">
                    <div className="mt-1 mr-3 w-4 h-4 rounded-full bg-brand-teal/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-brand-teal rounded-full" />
                    </div>
                    Marketing funnel and customer journey review
                  </li>
                  <li className="flex items-start text-sm text-gray-300">
                    <div className="mt-1 mr-3 w-4 h-4 rounded-full bg-brand-teal/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-brand-teal rounded-full" />
                    </div>
                    Competitor and market positioning analysis
                  </li>
                  <li className="flex items-start text-sm text-gray-300">
                    <div className="mt-1 mr-3 w-4 h-4 rounded-full bg-brand-teal/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-brand-teal rounded-full" />
                    </div>
                    Channel performance evaluation (ads, content, SEO)
                  </li>
                  <li className="flex items-start text-sm text-gray-300">
                    <div className="mt-1 mr-3 w-4 h-4 rounded-full bg-brand-teal/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-brand-teal rounded-full" />
                    </div>
                    Custom 30-day marketing action plan & written report
                  </li>
                </ul>
              </div>
              <div className="mt-auto relative z-10">
                <div className="p-3 bg-white/5 rounded-xl text-xs text-gray-400 mb-6 border border-white/5 italic">
                  Best for: Businesses ready to optimize marketing performance
                  and improve ROI.
                </div>
                <a
                  href="https://buy.stripe.com/9B628r7e45Up8xVd5h7ss02"
                  className="block w-full text-center py-4 rounded-xl bg-brand-teal/10 border border-brand-teal/40 text-brand-teal font-bold hover:bg-brand-teal hover:text-brand-dark transition-all"
                >
                  Purchase Consultation
                </a>
              </div>
            </motion.div>

            {/* Tier 3 (Featured) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative flex flex-col bg-gradient-to-b from-brand-dark to-[#0a1628] border-2 border-brand-blue rounded-3xl p-8 transform md:-translate-y-4 shadow-[0_0_30px_rgba(0,210,255,0.15)] group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap className="w-24 h-24 text-brand-blue" />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-brand-blue text-brand-dark text-xs font-bold px-4 py-1 rounded-b-xl uppercase tracking-wider">
                Most Popular
              </div>

              <div className="relative z-10 flex-grow mt-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  Advanced Market Audit
                </h3>
                <div className="text-3xl font-black text-brand-blue mb-4">
                  $1,500
                </div>
                <p className="text-gray-400 text-sm mb-6 pb-6 border-b border-brand-blue/20">
                  A comprehensive diagnostic of your marketing ecosystem.
                </p>

                <div className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
                  What you get:
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start text-sm text-gray-300">
                    <div className="mt-1 mr-3 w-4 h-4 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-brand-dark rounded-full" />
                    </div>
                    <span className="font-medium text-white">
                      Full marketing performance audit
                    </span>
                  </li>
                  <li className="flex items-start text-sm text-gray-300">
                    <div className="mt-1 mr-3 w-4 h-4 rounded-full bg-brand-blue/50 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                    Data and analytics deep-dive review
                  </li>
                  <li className="flex items-start text-sm text-gray-300">
                    <div className="mt-1 mr-3 w-4 h-4 rounded-full bg-brand-blue/50 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                    Conversion optimization & messaging analysis
                  </li>
                  <li className="flex items-start text-sm text-gray-300">
                    <div className="mt-1 mr-3 w-4 h-4 rounded-full bg-brand-blue/50 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                    Customer acquisition cost and ROI assessment
                  </li>
                  <li className="flex items-start text-sm text-gray-300">
                    <div className="mt-1 mr-3 w-4 h-4 rounded-full bg-brand-blue/50 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                    Custom 90-day strategic growth roadmap
                  </li>
                  <li className="flex items-start text-sm text-gray-300">
                    <div className="mt-1 mr-3 w-4 h-4 rounded-full bg-brand-blue/50 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                    Strategy presentation and consultation call
                  </li>
                </ul>
              </div>
              <div className="mt-auto relative z-10">
                <div className="p-3 bg-brand-blue/5 rounded-xl text-xs text-brand-blue/80 mb-6 border border-brand-blue/10 italic">
                  Best for: Established brands seeking scalable, data-driven
                  growth.
                </div>
                <a
                  href="https://buy.stripe.com/8x26oH55W2Id5lJ7KX7ss01"
                  className="block w-full text-center py-4 rounded-xl bg-brand-blue text-brand-dark font-bold hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all"
                >
                  Purchase Audit
                </a>
              </div>
            </motion.div>

            {/* Tier 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative flex flex-col bg-brand-dark border border-white/10 rounded-3xl p-8 hover:border-gray-300/50 transition-all group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Users className="w-24 h-24 text-gray-300" />
              </div>
              <div className="relative z-10 flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">
                  Executive Growth
                </h3>
                <div className="text-3xl font-black text-gray-200 mb-4">
                  $2,000
                </div>
                <p className="text-gray-400 text-sm mb-6 pb-6 border-b border-white/10">
                  Elite-level consultation designed for serious scaling.
                </p>

                <div className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
                  What you get:
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start text-sm text-gray-300">
                    <div className="mt-1 mr-3 w-4 h-4 rounded-full bg-gray-600/40 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                    </div>
                    <span className="font-medium text-white border-b border-gray-600/50 pb-0.5">
                      Everything in Advanced Audit
                    </span>
                  </li>
                  <li className="flex items-start text-sm text-gray-300">
                    <div className="mt-1 mr-3 w-4 h-4 rounded-full bg-gray-600/40 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                    </div>
                    Multi-session strategic consulting (up to 3)
                  </li>
                  <li className="flex items-start text-sm text-gray-300">
                    <div className="mt-1 mr-3 w-4 h-4 rounded-full bg-gray-600/40 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                    </div>
                    Predictive growth modeling & forecasting
                  </li>
                  <li className="flex items-start text-sm text-gray-300">
                    <div className="mt-1 mr-3 w-4 h-4 rounded-full bg-gray-600/40 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                    </div>
                    Custom marketing system design
                  </li>
                  <li className="flex items-start text-sm text-gray-300">
                    <div className="mt-1 mr-3 w-4 h-4 rounded-full bg-gray-600/40 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                    </div>
                    Budget allocation & KPI tracking framework
                  </li>
                  <li className="flex items-start text-sm text-gray-300">
                    <div className="mt-1 mr-3 w-4 h-4 rounded-full bg-gray-600/40 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                    </div>
                    30-day post-consultation support
                  </li>
                </ul>
              </div>
              <div className="mt-auto relative z-10">
                <div className="p-3 bg-white/5 rounded-xl text-xs text-gray-400 mb-6 border border-white/5 italic">
                  Best for: Businesses ready to scale aggressively with
                  precision and expert oversight.
                </div>
                <a
                  href="https://buy.stripe.com/9B6dR99mc1E96pN3uH7ss00"
                  className="block w-full text-center py-4 rounded-xl border border-gray-500 text-gray-300 font-bold hover:bg-gray-100 hover:text-black transition-all"
                >
                  Purchase Program
                </a>
              </div>
            </motion.div>
          </div>
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
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-500"
                    >
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to scale your business?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let's build a strategy that works for you. No fluff, just results.
            </p>
            <a
              href="/services"
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
