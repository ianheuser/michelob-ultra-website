export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/[slug].svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/recipes.svelte")
];

export const dictionary = {
	"": [[0, 3], [1]],
	"recipes": [[0, 4], [1]],
	"[slug]": [[0, 2], [1]]
};