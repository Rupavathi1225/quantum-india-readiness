import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const FocusRegions = () => {
  const regions = [
    "Delhi",
    "Uttar Pradesh",
    "Haryana",
    "Punjab",
    "Himachal Pradesh",
    "Uttarakhand",
    "Jammu & Kashmir",
    "Chandigarh"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-primary" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Focus <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Regions</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              This study covers major academic institutions across northern India
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 sm:p-12 shadow-card border border-border">
            <div className="flex flex-wrap justify-center gap-4">
              {regions.map((region, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="text-base px-6 py-3 rounded-full border-2 hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-default animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {region}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusRegions;
