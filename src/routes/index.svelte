
<script context="module" >
	export const prerender = true;

</script>

<script >
	import Supdawg from '$lib/Supdawg.svelte';
	import { page } from '$app/stores';
	import * as BuilderSDK from '@builder.io/sdk-svelte';
	// TODO: enter your public API key
	const BUILDER_PUBLIC_API_KEY = '87eb56a463224e9abd7f09701429c87d'; // ggignore
	let content = undefined;
	let canShowContent = false;
	const fetch = async () => {
		content = await BuilderSDK.getContent({
			model: 'page',
			apiKey: BUILDER_PUBLIC_API_KEY,
			options: BuilderSDK.getBuilderSearchParams($page.params),
			userAttributes: {
				urlPath: $page.url.pathname
			}
		});
		canShowContent = content || BuilderSDK.isEditing();
	};
	BuilderSDK.registerComponent(Supdawg, 
		{ 	
			name: "Sup Dawg",
			inputs: 
				[
					{
						name: "inputText",
						type: "string",
						defaultValue: "What is Supdawg?",
					},
					{
						name: "language",
						type: "string",
						defaultValue: "javascript",
					}
				]
		});
	fetch();
</script>

<section>
<div>Hello world from your SvelteKit project. Below is Builder Content:</div>

<Supdawg inputText="Woah" />
		<div>page: {(content && content.data && content.data.title) || 'Unpublished'}</div>
		<BuilderSDK.RenderContent model="page" {content} api-key={BUILDER_PUBLIC_API_KEY} />


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</section>



