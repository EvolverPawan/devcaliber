
import { Header } from "@/components/Header";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full mb-6">
              Get in Touch
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Discuss Your AI Solution
            </h1>
            <p className="text-primary max-w-2xl mx-auto">
              Schedule a consultation to explore how our AI solutions can transform your business operations.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-up">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-primary">contact@chatgenius.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="text-primary">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Visit Us</h3>
                    <p className="text-primary">123 AI Innovation Street<br />Tech Hub, CA 94105</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Quick Contact</h2>
                <Button
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90"
                  onClick={() => window.location.href = 'mailto:contact@chatgenius.com'}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send us an email
                </Button>
              </div>
            </div>

            <div className="animate-fade-up delay-100">
              <div className="bg-secondary/50 p-6 rounded-xl">
                <div className="flex items-center space-x-2 mb-6">
                  <Calendar className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-semibold">Schedule a Meeting</h2>
                </div>
                <div className="aspect-video">
                  <iframe
                    src="https://calendly.com/your-calendly-link"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
