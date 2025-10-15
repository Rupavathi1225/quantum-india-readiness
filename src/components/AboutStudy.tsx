import { Atom, Brain, TrendingUp } from "lucide-react";

const AboutStudy = () => {
  const features = [
    {
      icon: Atom,
      title: "Quantum Transformation",
      description: "Quantum Computing is transforming how industries solve problems — from finance to energy."
    },
    {
      icon: Brain,
      title: "Academic Ecosystem",
      description: "Understanding how faculty, scholars, and students perceive quantum programming usability."
    },
    {
      icon: TrendingUp,
      title: "Career Value",
      description: "Exploring career potential and adoption strategies in this emerging field."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About the <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Study</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This qualitative study aims to understand how India's academic ecosystem perceives the usability and career value of quantum programming. The insights will contribute to shaping educational strategies and collaborative initiatives in this emerging field.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl shadow-card hover:shadow-quantum transition-all duration-300 animate-fade-in border border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutStudy;
