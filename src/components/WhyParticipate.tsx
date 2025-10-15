import { Award, Handshake, PuzzleIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyParticipate = () => {
  const benefits = [
    {
      icon: Award,
      title: "Digital Certificate",
      description: "Receive a Digital Certificate of Participation recognizing your contribution to quantum research"
    },
    {
      icon: Handshake,
      title: "Academic Collaborations",
      description: "Gain visibility for future academic collaborations and research opportunities"
    },
    {
      icon: PuzzleIcon,
      title: "Shape the Future",
      description: "Contribute to India's roadmap for Quantum Research & Education initiatives"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Participate</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Your contribution will help shape the future of quantum education in India
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-quantum animate-fade-in group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-20 h-20 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyParticipate;
