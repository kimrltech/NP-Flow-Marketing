import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-blue selection:text-brand-dark">
            <Navbar />
            <ContactForm />
            <Footer />
        </main>
    );
}
