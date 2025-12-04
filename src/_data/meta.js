export const url = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:8080'
  : 'https://electoralintegrity.org';
// Extract domain from `url`
export const domain = new URL(url).hostname;
export const siteName = 'ELIS - Electoral Integrity Strategies';
export const siteDescription = 'Evidence-based research on electoral integrity. Synthesizing 35 years of research to identify what actually works to protect elections.';
export const siteType = 'Organization'; // schema - changed from Person to Organization
export const locale = 'en_GB'; // UK English
export const lang = 'en';
export const skipContent = 'Skip to content';
export const author = {
  name: 'Carlos Rocha', // Principal Investigator
  avatar: '/icon-512x512.png',
  email: 'elis@electoralintegrity.org',
  website: 'https://www.imperial.ac.uk/business-school/', // Imperial College Business School
  fediverse: '' // Add if available
};
export const creator = {
  name: 'Carlos Rocha', // Principal Investigator
  email: 'contact@electoralintegrity.org',
  website: 'https://electoralintegrity.org',
  social: '@ELIStrategies'
};
export const pathToSvgLogo = 'src/assets/svg/misc/logo.svg'; // used for favicon generation
export const themeColor = '#1B2332'; // Updated to match ELIS header color
export const themeLight = '#f8f8f8'; // Light background color
export const themeDark = '#273342'; // Updated to match ELIS hero background
export const opengraph_default = '/assets/og-images/og-default.png';
export const opengraph_default_alt =
  'Hand placing ballot in transparent box with world map in background, symbolizing global electoral integrity research'; // Updated alt text
export const blog = {
  // RSS feed
  name: 'ELIS Research Updates',
  description: 'Latest research findings and updates on electoral integrity strategies from the ELIS systematic literature review.',
  // feed links are looped over in the head. You may add more to the array.
  feedLinks: [
    {
      title: 'Atom Feed',
      url: '/feed.xml',
      type: 'application/atom+xml'
    },
    {
      title: 'JSON Feed',
      url: '/feed.json',
      type: 'application/json'
    }
  ],
  // Tags
  tagSingle: 'Tag',
  tagPlural: 'Tags',
  tagMore: 'More tags:',
  // pagination
  paginationLabel: 'Research',
  paginationPage: 'Page',
  paginationPrevious: 'Previous',
  paginationNext: 'Next',
  paginationNumbers: true
};
export const details = {
  aria: 'section controls',
  expand: 'expand all',
  collapse: 'collapse all'
};
export const dialog = {
  close: 'Close',
  next: 'Next',
  previous: 'Previous'
};
export const navigation = {
  navLabel: 'Menu',
  ariaTop: 'Main',
  ariaBottom: 'Complementary',
  ariaPlatforms: 'Platforms',
  drawerNav: false,
  subMenu: false
};
export const themeSwitch = {
  title: 'Theme',
  light: 'light',
  dark: 'dark'
};
export const greenweb = {
  // https://carbontxt.org/
  disclosures: [
    {
      docType: 'sustainability-page',
      url: `${url}/sustainability/`,
      domain: domain
    }
  ],
  services: [{domain: 'netlify.com', serviceType: 'cdn'}]
};
export const tests = {
  pa11y: {
    // keep customPaths empty if you want to test all pages
    customPaths: ['/', '/about/', '/research/', '/tools/'],
    globalIgnore: []
  }
};
export const viewRepo = {
  // this is for the view/edit on github link. The value in the package.json will be pulled in.
  allow: true,
  infoText: 'View this page on GitHub'
};
export const easteregg = true;
