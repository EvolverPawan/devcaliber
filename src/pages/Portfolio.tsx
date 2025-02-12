
import { Header } from "@/components/Header";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    title: "E-commerce Customer Support Bot",
    client: "Local Retail Chain",
    description: "Automated 75% of customer inquiries with a sophisticated AI chatbot, reducing response time from hours to seconds.",
    tags: ["Customer Service", "E-commerce", "AI"]
  },
  {
    title: "HR Process Automation",
    client: "Manufacturing Company",
    description: "Streamlined HR operations with an AI assistant handling employee queries and documentation requests.",
    tags: ["HR", "Process Automation", "Document Management"]
  },
  {
    title: "Lead Generation Assistant",
    client: "Real Estate Agency",
    description: "Implemented an AI chatbot that qualifies leads 24/7 and schedules property viewings automatically.",
    tags: ["Lead Generation", "Scheduling", "Real Estate"]
  },
  {
    title: "Multilingual Support Bot",
    client: "Travel Agency",
    description: "Developed a chatbot supporting 5 languages, handling booking inquiries and travel recommendations.",
    tags: ["Multilingual", "Travel", "Booking"]
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full mb-6">
              Our Work
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories
            </h1>
            <p className="text-primary max-w-2xl mx-auto">
              Discover how we've helped small and medium enterprises transform their operations with AI-powered solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-secondary/50 rounded-xl p-6 hover:bg-secondary transition-colors duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-primary mb-3">Client: {item.client}</p>
                <p className="text-primary mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="hover:bg-accent hover:text-white">
              View More Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
