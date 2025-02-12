
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 min-h-screen flex items-center bg-gradient-to-b from-secondary/50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full mb-6">
            AI-Powered Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Business with Intelligent Chatbots
          </h1>
          <p className="text-lg text-primary mb-8 max-w-2xl mx-auto">
            We design and develop cutting-edge AI chatbots that enhance customer experience and streamline operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
