import type { Project } from '../data/projects';

// Warm card palette, cycled across the work grid on the homepage and /projects.
const palette = [
  '#C95B2D', '#2E7D72', '#8A4B6B', '#6F7D2C',
  '#D8A013', '#B0371F', '#3A6FA8', '#56713A',
];

// The handwritten "for …" line under each project name.
function forLabel(tags: string[]): string {
  const t = tags[0] || '';
  if (/client/i.test(t)) return 'for a client';
  if (/internal|brthrs/i.test(t)) return 'for the agency';
  if (/personal/i.test(t)) return 'a personal build';
  return t;
}

export interface WorkCard extends Project {
  color: string;
  media: string;
  forText: string;
  href: string;
}

// Decorate projects for card rendering. `base` is import.meta.env.BASE_URL
// (trailing slash stripped) so links work at the domain root or a subpath.
export function toWorkCards(projects: Project[], base: string): WorkCard[] {
  return projects.map((p, i) => ({
    ...p,
    color: palette[i % palette.length],
    media: p.tags[1] || p.tags[0] || '',
    forText: forLabel(p.tags),
    href: `${base}/projects/${p.slug}/`,
  }));
}

export function cardColor(index: number): string {
  return palette[index % palette.length];
}
