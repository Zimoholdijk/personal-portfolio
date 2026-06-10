// Add your projects here. Each one renders as a card on /projects.
export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  repo?: string;
  image?: string; // path under /public, e.g. '/projects/myapp.png'
}

export const projects: Project[] = [
  {
    title: 'Agentic scoping workflow',
    description:
      'An agentic workflow built with Claude that takes a new client from intake to quote in about 20 minutes — what used to take days across several people. It ingests transcripts, emails, and documents, researches the client, drafts a scoping document and presentation, pressure-tests the proposal with a simulated client stand-in, and reviews everything against brand guidelines, with one person in the loop.',
    tags: ['Internal · Brthrs Agency', 'Agentic AI', 'Claude'],
  },
  {
    title: 'Recht in Beeld — AI case law analysis',
    description:
      'A Dutch investigation firm needed to analyse thousands of court cases nationwide and surface geographic patterns in case law. I built an API scraper and AI analysis engine that processes case law across the Netherlands, powering a map-based frontend for exploring legal insights geographically — patterns humans would never spot manually.',
    tags: ['Client project', 'AI Analysis', 'Web Scraping'],
    url: 'https://rechtinbeeld.ai',
  },
  {
    title: 'ToySwap — AI-powered toy marketplace',
    description:
      'A credit-based toy-swapping marketplace for local parent groups. Parents upload photos of toys their kids have outgrown, and AI analyses the images to suggest descriptions, categories, and credit values — making listing dead simple. No money changes hands, just credits, so perfectly good toys stay out of the landfill.',
    tags: ['Personal project', 'AI', 'Marketplace'],
    url: 'https://toyrotation.nl',
  },
  {
    title: 'Agency billing dashboard',
    description:
      'Our managing director was forecasting on stale data spread across multiple systems. I built an internal dashboard that connects to our accounting software via API and shows real-time billing, outstanding quotes, and expenditure in one place. Now used daily for financial forecasting and operational decisions.',
    tags: ['Internal · Brthrs Agency', 'Dashboard', 'API'],
  },
  {
    title: 'BloomFinder — RAG search for alternative medicine',
    description:
      'My father is an alternative medicine practitioner with years of research and literature but no way to search it semantically. I built a full RAG pipeline — document ingestion, embedding, vector search, and LLM answer synthesis — so he can ask natural-language questions and get sourced answers from his own knowledge base, and even sell access via subscription.',
    tags: ['Personal project', 'RAG', 'Vector Search'],
    url: 'https://bloomfinder-production.up.railway.app',
  },
  {
    title: 'StoryCloud — AI storybook builder',
    description:
      'My kids burn through storybooks and always want stories about their characters in their worlds. StoryCloud lets them pick characters, settings, and themes, then generates fully illustrated stories on the fly using generative text and image creation.',
    tags: ['Personal project', 'Generative AI', 'Kids'],
    url: 'https://story-cloud-maker.lovable.app',
  },
  {
    title: 'New Mom Reflections — post-partum journaling',
    description:
      'Existing journaling tools aren’t designed for the emotional and physical reality of new motherhood, and a blank page is intimidating when you’re sleep-deprived. This app uses AI to generate thoughtful, tailored prompts each session, giving new moms a gentle starting point for reflection every time they open it.',
    tags: ['Personal project', 'AI', 'Journaling'],
    url: 'https://gentle-new-mom-reflections.lovable.app',
  },
  {
    title: 'Matcherly — curated freelancer matching',
    description:
      'Companies needing expertise in a specific ERP tool had no efficient way to find vetted freelancers and agencies. Matcherly is a curated, multi-sided marketplace with role-based onboarding (freelancer, client, partner), profile management, project matching, and proposal workflows — built end to end.',
    tags: ['Client project', 'Marketplace', 'Matching'],
    url: 'https://app.matcherly.com',
  },
];
