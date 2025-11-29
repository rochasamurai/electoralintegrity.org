# ELIS 2025 - Electoral Integrity Strategies

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Protocol Version](https://img.shields.io/badge/Protocol-v1.9-blue.svg)](https://github.com/rochasamurai/ELIS-SLR-Agent)
[![Open Science](https://img.shields.io/badge/Open-Science-green.svg)](https://github.com/rochasamurai/electoralintegrity.org)

## About ELIS

**ELIS (Electoral Integrity Strategies)** is a systematic literature review investigating operational and technological strategies that have been shown to improve electoral integrity and auditability since 1990.

This repository hosts the public website for the ELIS research project: [electoralintegrity.org](https://electoralintegrity.org)

The website presents the project’s motivation, research design, methodology, expected deliverables, and ways for practitioners, researchers and supporters to engage with the work.

---

## Research Overview

**Primary Research Question**  
*What operational and technological strategies have been shown to improve the integrity or auditability of electoral systems since 1990?*

### Methodology

- **Type:** Systematic Literature Review (SLR)
- **Framework:** SPIDER (Sample, Phenomenon of Interest, Design, Evaluation, Research type)
- **Guidelines:** PRISMA-P 2015
- **Time Span:** 1990–2025
- **Languages:** English, French, Spanish, Portuguese

### Information Sources

Core scholarly sources include:

- Scopus
- Web of Science (Core Collection)
- IEEE Xplore
- Semantic Scholar
- OpenAlex
- CrossRef
- CORE

### Research Scope

The review examines:

- **Technological Strategies**  
  Voter-verified paper trails, risk-limiting audits, end-to-end verifiability, cryptographic systems, digital audit mechanisms.

- **Operational Mechanisms**  
  Audit procedures, transparency measures, parallel vote tabulation, observation protocols, chain-of-custody controls.

- **Institutional Conditions**  
  Legal frameworks, regulatory oversight, independence and capacity of electoral management bodies.

- **Public Trust**  
  Impact on voter confidence, perceived legitimacy of elections, and broader integrity perceptions.

---

## ELIS SLR Agent

The [ELIS SLR Agent](https://github.com/rochasamurai/ELIS-SLR-Agent) is an open-source Python tool developed to assist in conducting this systematic literature review.

**Key Features**

- Rule-based, deterministic automation for screening and data extraction  
- Full reproducibility and transparency of all steps  
- AI-assisted development (LLMs help generate code, not make research decisions)  
- Complete human oversight and final authority for inclusion/exclusion decisions  
- Version-controlled methodology on GitHub

**Tool Support:** [elis@electoralintegrity.org](mailto:elis@electoralintegrity.org)

---

## Project Status

- ✅ Protocol v1.9 completed  
- 🔄 Database searches in progress  
- 🔄 Screening and data extraction ongoing  
- 📝 Crowdfunding and sponsorship infrastructure being set up

Status on the website is periodically updated as the project advances through the search, screening, extraction and synthesis phases.

---

## Website & Tech Stack

The public website for ELIS is implemented as a modern static site, focused on clarity, performance and maintainability.

**Key technologies**

- [Eleventy](https://www.11ty.dev/) (v3.x) as the static site generator  
- Node.js 20+ (developed and tested with Node 22.x)  
- Tailwind CSS and a custom global CSS layer for layout and typography  
- Web-optimised image assets (including WebP hero and logo variants)

The homepage is composed of structured sections:

- **Hero** – ELIS identity, mission and core message  
- **About** – context and motivation  
- **Research Methodology** – SLR design and phases  
- **Deliverables** – planned outputs and timelines  
- **Tools** – ELIS SLR Agent and related tooling  
- **Support** – ways to support or collaborate with the project

---

## Repository Structure

This repository follows Eleventy’s “src → dist” convention. The main elements are:

```text
electoralintegrity.org/
├── eleventy.config.js          # Eleventy configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── package.json
├── src/
│   ├── _layouts/
│   │   └── base.njk            # Base layout used by pages
│   ├── _includes/
│   │   ├── partials/           # Header, footer, main navigation, etc.
│   │   └── sections/           # Homepage sections (hero, about, deliverables, etc.)
│   ├── assets/
│   │   ├── css/
│   │   │   └── global/global.css   # Global styles and ELIS-specific design
│   │   └── images/
│   │       ├── elis-logo.png
│   │       ├── elis-logo.webp
│   │       ├── hero-background.png
│   │       ├── hero-background.webp
│   │       └── favicon/            # Favicon and touch icon assets
│   └── pages/
│       └── index.njk           # Homepage entry point
└── dist/                       # Generated static files (build output)
```

> Note: `dist/` is generated by Eleventy during the build process and is the directory that should be deployed by your hosting provider.

---

## Running the Site Locally

### Prerequisites

- Node.js 20 or newer  
- npm (bundled with Node)

Check your versions:

```bash
node -v
npm -v
```

### Install dependencies

From the project root:

```bash
npm install
```

### Start the development server

```bash
npm start
```

By default, the site will be available at:

```text
http://localhost:8080
```

Changes to templates, CSS or content under `src/` will trigger an automatic rebuild and browser refresh.

### Build for production

To generate the static site in the `dist/` folder:

```bash
npm run build
```

The `dist/` directory can then be used by your hosting provider (e.g. Cloudflare Pages, Netlify, GitHub Pages).

---

## Institutional Affiliation

**Imperial College Business School**  
Visiting Researcher programme  

**Principal Investigator:** Carlos Rocha

---

## Open Science Commitment

All research materials, methodology, data and tools are openly available as part of a broader open science commitment:

- **Protocol:** Fully documented, version-controlled and publicly accessible  
- **Data:** All extracted data will be published, subject to licensing constraints  
- **Tools:** ELIS SLR Agent is open-source  
- **Reproducibility:** Every screening, extraction and synthesis decision is documented and verifiable

---

## Support This Research

Support is welcome for this independent academic research. Contributions help to:

- Develop and refine the ELIS SLR Agent  
- Secure access to academic databases for comprehensive literature coverage  
- Conduct rigorous screening, extraction and synthesis  
- Release open-source tools and curated datasets  
- Publish and disseminate findings to both academic and practitioner communities

**Express interest:**  
[contact@electoralintegrity.org](mailto:contact@electoralintegrity.org?subject=ELIS%20Research%20Support%20Inquiry)

---

## Contact

- **General enquiries:** [contact@electoralintegrity.org](mailto:contact@electoralintegrity.org)  
- **Research questions:** [research@electoralintegrity.org](mailto:research@electoralintegrity.org)  
- **Principal Investigator:** [carlos.rocha@electoralintegrity.org](mailto:carlos.rocha@electoralintegrity.org)  
- **Institutional email:** [c.rocha@imperial.ac.uk](mailto:c.rocha@imperial.ac.uk)  
- **Tool support (ELIS SLR Agent):** [elis@electoralintegrity.org](mailto:elis@electoralintegrity.org)

---

## Related Repositories

- [ELIS-SLR-Agent](https://github.com/rochasamurai/ELIS-SLR-Agent) – Automation tool for the systematic review

---

## Licence

- Website content: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)  
- Code: [MIT License](https://opensource.org/licenses/MIT)

---

## Citation

If you reference this work, please cite:

```text
Rocha, C. (2025). ELIS 2025: Electoral Integrity Strategies – A Systematic Literature Review.
Imperial College Business School. Protocol v1.9. https://electoralintegrity.org
```

---

**Website:** [electoralintegrity.org](https://electoralintegrity.org)  
**Protocol Version:** 1.9 (25 November 2025)  
**Last Updated:** 27 November 2025
