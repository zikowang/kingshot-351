import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const collections = {
  alliances: defineCollection({
    // Load Markdown files in the src/content/work directory.
    loader: glob({ base: "./src/content/alliances", pattern: "**/*.md" }),
    schema: z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
      wins: z.number().optional(),
      languages: z.array(z.string()).optional(),
      bear: z.array(z.string()).optional(),
      swordland: z.array(z.string()).optional(),
      tri_alliance_clash: z.array(z.string()).optional(),
      vikings: z.array(z.string()).optional(),
      cesares: z.array(z.string()).optional(),
      short: z.array(z.string()).optional(),
    }),
  }),
};
