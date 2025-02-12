
import { Check } from "lucide-react";

const reasons = [
  "Industry-leading AI technology",
  "Customized solutions for your business",
  "Expert development team",
  "Rapid deployment",
  "24/7 support",
  "Continuous improvement"
];

export const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full mb-6">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience the Difference
            </h2>
            <p className="text-primary">
              We combine technical expertise with innovative solutions to deliver exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-white rounded-lg shadow-sm animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                </div>
                <p className="font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
