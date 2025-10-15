import { BookOpen, Globe2, Users2 } from "lucide-react";

const ResearchInitiative = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              About the <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Research Initiative</span>
            </h2>
          </div>

          <div className="bg-card rounded-3xl p-8 sm:p-12 shadow-card border border-border">
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Academic Foundation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Led by an academic researcher pursuing advanced studies at an international university, this initiative builds upon published work in Quantum Programming Environments and Quantum Decision-Making Frameworks.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users2 className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Collaborative Approach</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The study is open for collaborative academic engagement and future co-research opportunities with institutions and scholars across India.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">National Impact</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This research aims to provide comprehensive insights into India's quantum computing ecosystem, helping shape educational policies and research directions at a national level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchInitiative;
