import { Mail, FileText, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">ELIS Protocol</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A systematic review dedicated to advancing electoral integrity through rigorous evidence synthesis and open science.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Protocol Document
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    Data Repository
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Publications
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <a 
                href="mailto:contact@electoralintegrity.org" 
                className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 text-sm"
              >
                <Mail className="h-4 w-4" />
                contact@electoralintegrity.org
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© 2025 ELIS Protocol. Open Science Initiative.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
