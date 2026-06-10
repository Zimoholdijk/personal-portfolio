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
    title: 'Example Project One',
    description:
      'A short, concrete description of what this project does and why it matters. Replace me.',
    tags: ['TypeScript', 'Astro'],
    url: 'https://example.com',
    repo: 'https://github.com/zimoholdijk/example',
  },
  {
    title: 'Example Project Two',
    description:
      'Another project description. Focus on the problem solved and the outcome. Replace me.',
    tags: ['Python', 'Data'],
  },
];
