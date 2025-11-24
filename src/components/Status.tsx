import { CheckCircle2, Clock, AlertCircle } from "lucide-react";

const Status = () => {
  const implementation = [
    { component: "Protocol v1.8", status: "complete", notes: "7 sources finalized" },
    { component: "Scopus", status: "complete", notes: "Operational" },
    { component: "Web of Science", status: "complete", notes: "Operational" },
    { component: "IEEE Xplore", status: "complete", notes: "Operational" },
    { component: "Semantic Scholar", status: "complete", notes: "Operational" },
    { component: "OpenAlex", status: "complete", notes: "Operational" },
    { component: "CrossRef", status: "complete", notes: "Operational" },
    { component: "CORE", status: "warning", notes: "Occasional timeouts" },
  ];

  const progress = [
    { stage: "Search", status: "progress", records: "~15,000 expected" },
    { stage: "Deduplication", status: "pending", records: "TBD" },
    { stage: "Title/Abstract Screening", status: "pending", records: "TBD" },
    { stage: "Full-Text Screening", status: "pending", records: "TBD" },
    { stage: "Data Extraction", status: "pending", records: "TBD" },
    { stage: "Synthesis", status: "pending", records: "Expected Q2 2026" },
  ];

  const milestones = [
    "Protocol v1.8 finalized with 7 information sources documented",
    "All API integrations completed and operational",
    "Documentation comprehensive: Protocol PDF, CHANGELOG, README",
    "Repository cleanup: streamlined structure with essential files",
    "Open methodology: Full transparency via GitHub version control",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Current Status
            </h2>
            <p className="text-lg text-muted-foreground">
              November 2025 • Protocol v1.8
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Implementation Status */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Implementation Status
              </h3>
              <div className="space-y-3">
                {implementation.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <span className="text-sm text-muted-foreground font-medium">{item.component}</span>
                    <div className="flex items-center gap-2">
                      {item.status === 'complete' && (
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      )}
                      {item.status === 'warning' && (
                        <AlertCircle className="h-4 w-4 text-yellow-600" />
                      )}
                      <span className="text-xs text-muted-foreground">{item.notes}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Progress */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Review Progress
              </h3>
              <div className="space-y-3">
                {progress.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <span className="text-sm text-muted-foreground font-medium">{item.stage}</span>
                    <div className="flex items-center gap-2">
                      {item.status === 'progress' && (
                        <Clock className="h-4 w-4 text-blue-600 animate-pulse" />
                      )}
                      {item.status === 'pending' && (
                        <Clock className="h-4 w-4 text-gray-400" />
                      )}
                      <span className="text-xs text-muted-foreground">{item.records}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Milestones */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              Recent Milestones (November 2025)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-3 bg-background/50 rounded-lg p-4">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{milestone}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">7</div>
              <div className="text-sm text-muted-foreground">API Sources</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">v1.8</div>
              <div className="text-sm text-muted-foreground">Protocol Version</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">~15K</div>
              <div className="text-sm text-muted-foreground">Expected Records</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Reproducible</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Status;
