
import { Bot, Brain, Zap, Settings } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Custom Chatbot Development",
    description: "Tailor-made AI chatbots designed to meet your specific business needs and requirements."
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Seamless integration of advanced AI models to power intelligent conversations."
  },
  {
    icon: Zap,
    title: "Natural Language Processing",
    description: "Advanced NLP capabilities for human-like interactions and understanding."
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description: "Ongoing support and updates to ensure your chatbot stays current and effective."
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full mb-6">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive AI Solutions
          </h2>
          <p className="text-primary max-w-2xl mx-auto">
            We offer a full range of AI chatbot development services to help your business thrive in the digital age.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <service.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-primary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
