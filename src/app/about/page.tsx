import Header from '@/components/Header';
import AboutComponent from '@/components/About';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AboutComponent isHomePage={false} />
        <ContactForm isFullPage={false} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}