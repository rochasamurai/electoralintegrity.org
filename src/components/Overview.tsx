import { FileSearch, Database, Target } from "lucide-react";

const Overview = () => {
  const features = [
    {
      icon: FileSearch,
      title: "Systematic Methodology",
      description: "Following PRISMA guidelines for transparent, replicable systematic reviews of electoral integrity interventions.",
    },
    {
      icon: Database,
      title: "Comprehensive Evidence Base",
      description: "Synthesizing research across political science, development studies, and policy evaluation to map what works.",
    },
    {
      icon: Target,
      title: "Actionable Insights",
      description: "Translating evidence into practical recommendations for strengthening democratic electoral processes.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About the ELIS Protocol
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The ELIS Protocol represents a rigorous, open-science approach to understanding and improving electoral integrity through systematic evidence synthesis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-muted/50 rounded-lg p-8 sm:p-12">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Research Objectives
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Identify and map electoral integrity strategies implemented globally across diverse political contexts</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Evaluate the effectiveness of interventions using rigorous systematic review methodology</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Synthesize findings to inform evidence-based policymaking and future research priorities</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Promote transparency and reproducibility through open science practices</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
