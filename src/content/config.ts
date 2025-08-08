import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    layout: z.string().optional(),
    hero: z.object({
      title: z.string(),
      subtitle: z.string(),
      badge: z.string().optional(),
    }).optional(),
    sections: z.array(z.object({
      type: z.enum(['stats', 'services', 'cta', 'content']),
      title: z.string().optional(),
      subtitle: z.string().optional(),
      items: z.array(z.any()).optional(),
    })).optional(),
  }),
});

const servicesCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    shortDescription: z.string(),
    features: z.array(z.string()).optional(),
    stats: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional(),
  }),
});

export const collections = {
  'pages': pagesCollection,
  'services': servicesCollection,
};