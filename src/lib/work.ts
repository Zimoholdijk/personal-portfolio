import type { Project } from '../data/projects';

// Warm accent palette, cycled across the work rows (used for hover thumbs and
// the detail-page accent).
const palette = [
  '#B96A43', '#47766D', '#7D5468', '#74783E',
  '#C09335', '#9D4A33', '#4A6B8C', '#5E7245',
];

// Short audience label shown as the row's tag.
function audienceLabel(tags: string[]): string {
  const t = tags[0] || '';
  if (/client/i.test(t)) return 'Client';
  if (/internal|brthrs/i.test(t)) return 'Agency';
  if (/personal/i.test(t)) return 'Personal';
  return t;
}

export interface WorkRow extends Project {
  name: string; // display name (title before any colon)
  color: string;
  audience: string;
  href: string;
  no: string; // two-digit index, e.g. '01'
}

// Decorate projects for row rendering. `base` is import.meta.env.BASE_URL
// (trailing slash stripped) so links work at the domain root or a subpath.
export function toWorkRows(projects: Project[], base: string): WorkRow[] {
  return projects.map((p, i) => ({
    ...p,
    name: p.title.split(':')[0].trim(),
    color: palette[i % palette.length],
    audience: audienceLabel(p.tags),
    href: `${base}/projects/${p.slug}/`,
    no: String(i + 1).padStart(2, '0'),
  }));
}

export function cardColor(index: number): string {
  return palette[index % palette.length];
}
