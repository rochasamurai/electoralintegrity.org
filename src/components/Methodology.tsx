
import { CheckCircle2 } from "lucide-react";

const Methodology = () => {
  const stages = [
    {
      phase: "1. Search Strategy",
      items: [
        "Configure queries in YAML",
        "Test with preflight scripts",
        "Validate API syntax",
        "Document all decisions",
      ],
    },
    {
      phase: "2. Data Harvesting",
      items: [
        "Run 7 harvest scripts",
        "Query APIs systematically",
        "Collect metadata",
        "Save to validated JSON",
      ],
    },
    {
      phase: "3. Data Consolidation",
      items: [
        "Merge results from all sources",
        "Deduplicate records",
        "Normalize metadata fields",
        "Validate completeness",
      ],
    },
    {
      phase: "4. Screening (Human-Led)",
      items: [
        "Title/abstract screening",
        "Full-text assessment",
        "AI-assisted suggestions (human validates)",
        "Log all decisions with rationales",
      ],
    },
    {
      phase: "5. Data Extraction",
      items: [
        "Study characteristics",
        "Risk of bias assessment (PRISMA-P, Cochrane ROB-2)",
        "Primary/secondary outcomes",
        "GRADE-CERQual confidence ratings",
      ],
    },
    {
      phase: "6. Synthesis & Reporting",
      items: [
        "Quantitative analysis",
        "Qualitative thematic synthesis",
        "Mixed methods integration",
        "PRISMA-compliant manuscript",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Six-Stage Workflow
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our systematic review follows a six-stage API-driven workflow with AI assistance and human oversight, ensuring rigorous, transparent, and reproducible evidence synthesis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {stages.map((stage, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {stage.phase}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {stage.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-center text-muted-foreground">
              <span className="font-semibold text-foreground">Standards Alignment:</span> This systematic review follows PRISMA-P 2015 guidelines and Protocol v1.8. Registered with Spiral (Imperial College) and OSF (Open Science Framework).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
