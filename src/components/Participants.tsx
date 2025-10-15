import { GraduationCap, Users, BookOpen, CheckCircle2 } from "lucide-react";

const Participants = () => {
  const eligibleGroups = [
    {
      icon: Users,
      title: "Faculty & Academic Professionals",
      description: "Professors, lecturers, and researchers in relevant fields"
    },
    {
      icon: GraduationCap,
      title: "PhD Candidates & Postdocs",
      description: "Doctoral scholars and postdoctoral researchers"
    },
    {
      icon: BookOpen,
      title: "Final & Pre-Final Year Students",
      description: "Undergraduate and postgraduate students"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Who Can <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Participate</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            This study welcomes participation from across India's academic community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {eligibleGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{group.title}</h3>
                <p className="text-muted-foreground">{group.description}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto bg-gradient-to-br from-accent/10 to-primary/10 p-8 rounded-2xl border-2 border-accent/30 animate-fade-in">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-xl font-bold mb-2">Pre-Requisite</h4>
              <p className="text-muted-foreground">
                Basic understanding of Quantum Computing concepts is required for meaningful participation in this study.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Participants;
