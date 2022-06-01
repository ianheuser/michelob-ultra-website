
<script context="module" >
	export const prerender = true;
</script>

<script >
	import Supdawg from '$lib/Supdawg.svelte';
	import Banner from '$lib/Banner.svelte';
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
			//options: BuilderSDK.getBuilderSearchParams($page.params),
			options: BuilderSDK.getBuilderSearchParams(BuilderSDK.convertSearchParamsToQueryObject($page.url.searchParams)),
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

	BuilderSDK.registerComponent(Banner, 
		{ 	
			name: "Ultra Banner",
			inputs: 
				[
					{
						name: "bannerTitle",
						type: "string",
						defaultValue: "SAVE IT, SEE IT",
					},
					{
						name: "text",
						type: "string",
						defaultValue: "WHEN WE HIT SAVE ON WOMEN'S SPORT",
					},
					{
						name: "buttonUrl",
						type: "url",
					},
					{ 
						name: 'image',
						type: 'file', 
						allowedFileTypes: ['jpeg', 'png'] 
  }
				]
		});
	fetch();




</script>
<h1>Michelob Ultra Test Page</h1>
<section>
	<div>page: {(content && content.data && content.data.title) || 'Unpublished'}</div>
	<BuilderSDK.RenderContent model="page" {content} api-key={BUILDER_PUBLIC_API_KEY} />
</section>



