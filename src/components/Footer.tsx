import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold text-white mb-2">NP Flow Marketing</h3>
                        <p className="text-gray-500 text-sm">Elevating brands worldwide.</p>
                    </div>

                    <div className="flex space-x-6">
                        <a
                            href="https://www.facebook.com/profile.php?id=61587636652047"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-brand-blue transition-colors"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a
                            href="https://x.com/npflowmarketing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-brand-blue transition-colors"
                            aria-label="X (Twitter)"
                        >
                            <Twitter className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.instagram.com/npflowmarketing/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-brand-blue transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCDOeXeiFXDDlmv7jSbYuCNQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-brand-blue transition-colors"
                            aria-label="YouTube"
                        >
                            <Youtube className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                    <p>&copy; {new Date().getFullYear()} NP Flow Marketing. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-400">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
