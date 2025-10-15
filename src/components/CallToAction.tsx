import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-secondary p-1 rounded-3xl shadow-quantum animate-fade-in">
            <div className="bg-card rounded-3xl p-8 sm:p-12">
              <div className="text-center space-y-8">
                <div>
                  <div className="inline-block mb-6">
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
                      Join the Initiative
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                    Be Part of India's{" "}
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Quantum Future
                    </span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Help us explore the awareness and adoption potential of Quantum Computing in India's universities. Your insights will shape the future of quantum education.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg"
                    className="text-lg shadow-quantum hover:shadow-xl transition-all duration-300 group"
                  >
                    🧾 Take the Pre-Eligibility Survey
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Only 3 minutes</span>
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Have questions? Contact us for more information about the study and participation requirements.
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

export default CallToAction;
