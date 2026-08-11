// Add your projects here. Each one renders as a row on the homepage and
// /projects, and gets its own detail page at /projects/<slug>/.
export interface Project {
  slug: string; // stable URL segment for the detail page, e.g. 'toyrotation'
  title: string;
  blurb: string; // one short line (< ~40 chars) shown next to the name in lists
  description: string;
  tags: string[];
  url?: string;
  repo?: string;
  image?: string; // path under /public, e.g. '/projects/myapp.png'
}

export const projects: Project[] = [
  {
    slug: 'toyrotation',
    title: 'ToyRotation: AI-powered toy marketplace',
    blurb: 'Credit-based toy swapping for parents',
    image: '/projects/toyrotation-1.png',
    description:
      'A credit-based toy-swapping marketplace for local parent groups. Parents upload photos of toys their kids have outgrown, and AI analyses the images to suggest descriptions, categories, and credit values, which makes listing something quick and painless. No money changes hands, just credits, so perfectly good toys stay out of the landfill.',
    tags: ['Personal project', 'AI', 'Marketplace'],
    url: 'https://toyrotation.nl',
  },
  {
    slug: 'agentic-scoping-workflow',
    title: 'Agentic scoping workflow',
    blurb: 'Client intake to quote in ~20 minutes',
    description:
      'An agentic workflow built with Claude that takes a new client from intake to quote in about 20 minutes, work that used to take days across several people. It ingests transcripts, emails, and documents, researches the client, drafts a scoping document and presentation, pressure-tests the proposal with a simulated client stand-in, and reviews everything against brand guidelines, with one person in the loop.',
    tags: ['Agency work', 'Agentic AI', 'Claude'],
  },
  {
    slug: 'recht-in-beeld',
    title: 'Recht in Beeld: AI case law analysis',
    blurb: 'Court cases analysed and mapped',
    image: '/projects/recht-in-beeld-1.png',
    description:
      'A Dutch investigation firm needed to analyse thousands of court cases nationwide and surface geographic patterns in case law. I built an API scraper and AI analysis engine that processes case law across the Netherlands, powering a map-based frontend for exploring legal insights geographically and surfacing patterns humans would never spot manually.',
    tags: ['Client project', 'AI Analysis', 'Web Scraping'],
    url: 'https://rechtinbeeld.ai',
  },
  {
    slug: 'agency-billing-dashboard',
    title: 'Agency billing dashboard',
    blurb: 'Real-time billing for the agency',
    description:
      'An agency was forecasting on stale data spread across multiple systems. I built an internal dashboard that connects to their accounting software via API and shows real-time billing, outstanding quotes, and expenditure in one place. Now used daily for their financial forecasting and operational decisions.',
    tags: ['Agency work', 'Dashboard', 'API'],
  },
  {
    slug: 'bandbridge',
    title: 'BandBridge: a community for LA musicians',
    blurb: 'Community hub for LA musicians',
    image: '/projects/bandbridge-1.png',
    description:
      'BandBridge is a community platform for musicians in Los Angeles, built for a showcase host who had become the person everyone called to find a bassist, a teacher, or an open mic. Rather than another pile of tools, I focused it on the one thing that mattered: helping musicians find each other. They create profiles with expertise tags and music links, post events and gigs that archive themselves once they pass, and search a talent pool to connect, with moderation tools so it runs without a developer.',
    tags: ['Client project', 'Community', 'Full-stack'],
    url: 'https://bandbridge.club',
  },
  {
    slug: 'storycloud',
    title: 'StoryCloud: AI storybook builder',
    blurb: 'Illustrated AI storybooks for my kids',
    description:
      'My kids burn through storybooks and always want stories about their characters in their worlds. StoryCloud lets them pick characters, settings, and themes, then generates fully illustrated stories on the fly using generative text and image creation.',
    tags: ['Personal project', 'Generative AI', 'Kids'],
    url: 'https://story-cloud-maker.lovable.app',
  },
  {
    slug: 'new-mom-reflections',
    title: 'New Mom Reflections: post-partum journaling',
    blurb: 'Gentle AI journaling for new mothers',
    description:
      'Existing journaling tools aren’t designed for the emotional and physical reality of new motherhood, and a blank page is intimidating when you’re sleep-deprived. This app uses AI to generate thoughtful, tailored prompts each session, giving new moms a gentle starting point for reflection every time they open it.',
    tags: ['Personal project', 'AI', 'Journaling'],
    url: 'https://gentle-new-mom-reflections.lovable.app',
  },
  {
    slug: 'matcherly',
    title: 'Matcherly: curated freelancer matching',
    blurb: 'Curated marketplace for ERP experts',
    image: '/projects/matcherly-1.png',
    description:
      'Companies running a specialist ERP system struggle to find consultants with the right module expertise, and generic freelance marketplaces are too broad to help. Matcherly is a curated, three-sided platform where a business submits a project and an expert team hand-picks the best-fit specialists, rather than leaving them to browse hundreds of profiles. I built it end to end: a guided submission flow for clients, rich profiles and a matched-projects dashboard for specialists, and an admin cockpit for the team to review, match, and quality-check every proposal.',
    tags: ['Client project', 'Marketplace', 'Matching'],
    url: 'https://app.matcherly.com',
  },
];
