import { z, defineCollection, reference } from "astro:content";

// Every collection must reflect Decap's config.yml collection schema
// In order to be able to optimize images with Astro built-in components, like <Image />, we first must use this image helper 
// Doc: https://docs.astro.build/en/guides/images/#images-in-content-collections

const detailsCollection = defineCollection({
	type: "data",
	schema: () =>
		z.object({
			name: z.string(),
			nameShort1: z.string(),
			nameShort2: z.string(),
			email: z.string(),
			phone: z.string(),
			description: z.string(),
			address: z.object({
				addressLineOne: z.string(),
				addressLineTwo: z.string(),
				addressCity: z.string(),
				addressState: z.string(),
				addressZip: z.string(),
			}),
			linkPsychologyToday: z.string(),
			domain: z.string(),
			keywords: z.array(z.string()).optional(),
			insurances: z.array(z.string()).optional(),
		}),
});

const blogsCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			author: z.array(reference("author")),
			date: z.date(),
			tags: z.array(z.string()).optional(),
			image: image(),
			imageAlt: z.string().optional(),
		}),
});

const authorsCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			photo: image().or(z.string()),
			qualifications: z.string(),
			email: z.string(),
			link_psychology_today: z.string(),
			link_linkedin: z.string(),
			link_vitadox: z.string(),
			bio: z.string(),
			biography: z.string(),
			order: z.number(),
		}),
});

const treatmentsCollection = defineCollection({
	type: "content",
	schema: () =>
		z.object({
			name: z.string(),
		}),
});

const termsCollection = defineCollection({
	type: "content",
	schema: () =>
		z.object({
			name: z.string(),
		}),
});

export const collections = {
	details: detailsCollection,
	blog: blogsCollection,
	author: authorsCollection,
	treatments: treatmentsCollection,
	terms: termsCollection,
};