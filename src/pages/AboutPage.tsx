import Header from '@/components/Header';
import About from '@/components/About';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <About isHomePage={false} />
        <ContactForm isFullPage={false} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}